---
title: 'Lab: Two-Way Serial Communication'
date: '2020-10-21'
description: ''
tags:
  - 'PHYSICAL_COMPUTING'
---

[Lab Guide](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/two-way-duplex-serial-communication-using-p5js/)

In this lab I created a physical interface to control a JavaScript program. I used the Arduino's built-in accelerometer coupled with a pushbutton as my input device.

First I wrote the firmware to read and write the accelerometer and button data and write a formatted string to the serial port. I used the `Arduino_LSM6DS3` library to parse the accelerometer data. The output was a comma-separated string of all of the values (including the button state).

The JavaScript code allows the user to control the position of a circle by moving and rotating the device. It maps the x and y accelerometer data to the x and y position of the circle. It also updates the circle's color when the button state is `1`.

<p>
<video autoplay muted loop name="The program in action" src="IMG_6395.mp4"></video>
<em>The program in action</em>
</p>

Once the logic was implemented, I added a "Handshaking" step so that the Arduino code would wait until the JavaScript code indicated that it was ready before streaming data. The Arduino code waits until anything is written to the serial port before beginning its output.

The Arduino code:

```cpp
#include "Arduino_LSM6DS3.h"

const int buttonPin = 2;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);

  if (!IMU.begin()) {
    Serial.println("Failed to initialize IMU");
    while (true);
  }

  while (Serial.available() <= 0) {
    Serial.println("hello");
    delay(300);
  }
}

void loop() {
  if (!Serial.available()) {
    return;
  }

  float xAcc, yAcc, zAcc;
  float xGyro, yGyro, zGyro;

  if (IMU.accelerationAvailable() && IMU.gyroscopeAvailable()) {
    IMU.readAcceleration(xAcc, yAcc, zAcc);
    IMU.readGyroscope(xGyro, yGyro, zGyro);

    Serial.print(xAcc);
    Serial.print(",");
    Serial.print(yAcc);
    Serial.print(",");
    Serial.print(zAcc);
    Serial.print(",");
    Serial.print(xGyro);
    Serial.print(",");
    Serial.print(yGyro);
    Serial.print(",");

    int buttonValue = digitalRead(buttonPin);
    Serial.println(buttonValue);
  }
}
```

The JavaScript code:

```js
let serial;
let latestData = 'waiting for data';

let xPos = 100;
let yPos = 100;
let circleColor = 255;

function setup() {
  createCanvas(500, 500);
  serial = new p5.SerialPort();
  serial.list();
  serial.open('/dev/tty.usbmodem1412301');
  serial.on('connected', serverConnected);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
}

function serverConnected() {
  print('Connected to Server');
}

function gotOpen() {
  print('Serial Port is Open');
}

function gotClose() {
  print('Serial Port is Closed');
  latestData = 'Serial Port is Closed';
}

function gotError(e) {
  print('Error');
  print(e);
}

function gotData() {
  const inString = serial.readStringUntil('\r\n');
  latestData = inString;

  if (inString === 'hello') {
    serial.write('x');
  } else {
    if (inString.length > 0) {
      const sensors = split(inString, ',');
      const [xAcc, yAcc, zAcc, xGyro, yGyro, btnState] = sensors;
      xPos = width / 2 + xAcc * (width / 2);
      yPos = height / 2 - yAcc * (height / 2);
      circleColor = 255 - parseInt(btnState) * 255;
    }
  }
}

function draw() {
  background(100);
  fill(0, 0, 0);
  text(latestData, 10, 10);
  fill(circleColor);
  ellipse(xPos, yPos, 50, 50);
}
```
