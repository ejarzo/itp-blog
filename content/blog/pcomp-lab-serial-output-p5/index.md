---
title: 'Lab: Serial Output from P5'
date: '2020-10-15T12:20:03'
description: ''
tags:
  - 'PHYSICAL_COMPUTING'
---

[Lab Guide](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/)

In this lab I used serial communication to control an LED using JavaScript code. I rewired the breadboard to contain a single LED connected to the arduino. Beginning from where I left off in the [previous lab](/pcomp-lab-serial-input-p5), I modified the code to send serial data instead of just receive it.

I implemented the P5 `mouseDragged` function so that dragging the mouse changed the LED's brightness.

<p>
<video autoplay loop muted name="caption" src="IMG_6390.mp4"></video>
<em>caption</em>
</p>

I then wrote logic to toggle the LED on or off using the `H` and `L` keys on the keyboard. The JS code sent the key that was pressed which was then decoded and acted upon by the embedded code.

<p>
<video autoplay loop muted name="caption" src="IMG_6392.mp4"></video>
<em>caption</em>
</p>

The JavaScript code:

```js
var serial;
const PORT_NAME = '/dev/tty.usbmodem142301';
var inData;
var xPos = 0;
var outByte = 0;

function setup() {
  serial = new p5.SerialPort();

  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  serial.list();
  serial.open(PORT_NAME);

  createCanvas(400, 300);
}

function draw() {
  background(0);
  fill(255);
  text('incoming value: ' + inData, 30, 30);
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.');
}

function mouseDragged() {
  outByte = int(map(mouseY, 0, height, 0, 255));
  serial.write(outByte);
}

function serialEvent() {
  var inByte = serial.read();
  inData = inByte;
}

function keyPressed() {
  if (key === 'H' || key === 'L') {
    serial.write(key);
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}
```

The Arduino code:

```cpp
const int ledPin = A0;
int incomingByte;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
    if (incomingByte == 'H') {
      digitalWrite(ledPin, HIGH);
    }
    if (incomingByte == 'L') {
      digitalWrite(ledPin, LOW);
    }
  }
}
```
