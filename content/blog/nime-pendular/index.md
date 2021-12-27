---
title: 'Pendular'
date: '2021-12-07'
description: ''
tags:
  - 'NIME'
  - 'DIGIFAB'
---

<p style="width: 150%; position: relative; left: -25%;">
<img src="./img/3J0A9900.JPG" />
</p>

<p style="width: 150%; position: relative; left: -25%;">
<img src="./img/pendular-long-exposure-mean.png" />
</p>

<!-- ![caption](rehearsal-screenshot-1.png)
_caption_ -->

I am excited to present _Pendular_, a collaboration with [Marcel Wang](https://yiranwang.art/).

Video coming soon!

1. [Overview](#Overview)
2. [Initial Concept](#InitialConcept)
3. [System Overview](#SystemOverview)
4. [Fabrication](#Fabrication)
5. [Electronics](#Electronics)
6. [Code and Audio](#CodeAndAudio)

<h2 id="Overview">Overview</h2>

_Pendular_ is an interactive musical system that explores the physical motion of hanging objects as a method for manipulating synthesized music. Using wind and light, we work in tandem to control the environment to which these objects react. As the objects swing and spin through the air, their movements are interpreted as sonic transformations ranging from calm and predictable to chaotic and random.

<p style="width: 150%; position: relative; left: -25%;">
<img src="./img/me02.png" />
</p>

Two objects, a flat circle and a cube, hang side by side. The cube controls a synthesizer and the circle controls effects on live vocals.

<p style="width: 150%; position: relative; left: -25%;">
<img src="./img/3J0A9918.JPG" />
</p>

<p style="width: 150%; position: relative; left: -25%;">
<img src="./img/3J0A9948_2copy.png" />
</p>

<p style="width: 150%; position: relative; left: -25%;">
<img src="./img/NIME_Stream282.jpg" />
<em>Performance at the ITP NIME show -- Dec 12 2021</em>
</p>

<h2 id="InitialConcept">Initial Concept</h2>

For our initial concept we were inspired by force and pendular motion as the basis for sound creation. We wanted to capture both the calmness and the turbulence of the natural world. How could we capture these motions and turn them into sound?

![Initial concept and inspirations](concept1.png)
_Initial concept and inspirations_

We created a concept similar to a wind chime where hanging objects move freely, each suspended by a string.

![3D rendering of our idea](concept2.png)
_3D rendering of our idea_

Each object could sense its own motion with an accelerometer and light with a photosensor, so we could interact with the device using touch, wind, and light sources.

![Input and Output of each object](concept3.png)
_Input and Output of each object_

We could perform with the system by having someone control the environment while the other plays the notes that are being manipulated by it.

![How we imagined the device being played by two people](concept4.png)
_How we imagined the device being played by two people_

We imagined a lot of objects all moving subtly together. Ultimately we created just two but this emphasized their motion even more, since they are different sizes and weights.

<h2 id="SystemOverview">System Overview</h2>

![System overview diagram](schematic.png)
_System overview diagram_

The system consists of two (perhaps more in the future) swinging objects suspended at various heights. Each has an accelerometer, photo-sensor, and LED to illuminate itself. They are connected via a [multiplexer](https://www.exp-tech.de/en/modules/interfaces/6701/adafruit-tca9548a-i2c-multiplexer) to an Arduino which sends data to a custom Max/MSP program that controls parameters in Ableton Live.

### Proof of Concept

Just to make sure the idea could work and -- most importantly -- sounded good we created a proof of concept using an accelerometer attached to a breadboard. We connected and it with a ethernet cable so we could get a sense of the motion.

<p>
<video controls name="Proof of concept" src="proof-of-concept.mp4"></video>
<em>Proof of concept</em>
</p>

<h2 id="Fabrication">Fabrication</h2>

The first thing we needed to do was create a way to suspend the objects and attach the sensors.

### Handmade prototype

![First prototype](IMG_0036.jpeg)
_First prototype_

Using the bandsaw and drill we prototyped a wooden piece that we could bolt on to a piece of acrylic that we used as the object. Two holes to attach to the enclosure and two tiny holes to suspend the piece with fishing wire. It was pretty rough but the overall idea seemed to work.

![First prototype (back)](IMG_0037.jpeg)
_First prototype (back)_

For our first test we drilled the accelerometer directly to the wood. We also cut down the sides because they were in the way of the fishing wire.

![Attaching the accelerometer](IMG_0039.jpeg)
_Attaching the accelerometer_

### Laser cut prototype

For our next iteration we designed the enclosure in Vectorworks and laser cut the pieces. Starting with cardboard...

![Cardboard enclosure prototype](IMG_0058.jpeg)
_Cardboard enclosure prototype_

And moving on to wood...

![The wooden enclosure](IMG_0062.jpeg)
_The wooden enclosure_

This version of the enclosure assumed that the accelerometer would be placed vertically instead of flat. We soon realized that this posed some problems with the sensor as the most accurate readings come from the flat position.

As a proof of concept it worked well. It allowed us to notice some issues with the design. First, the flat part that the sensor would sit on needed to be thicker so that we could screw into it. It also was not fixed in its position -- it would be better for it to have notches in the side so we could sandwich the sensor in without having to glue anything. There also needed to be more space to allow the sensor to be flat.

### Version 2

Back to the drawing board! We designed our final enclosure around our newly finished PCB design (more on that below). This version features thicker wood for the sensor base as well as mounting holes and notches so that the whole thing can be put together and taken apart easily.

![Final housing design](final-housing-design.png)
_Final housing design_

![Many prototypes](IMG_0097.jpeg)
_Many prototypes_

Starting with cardboard again, we printed the new design.

![Laser cutting the wood](IMG_0098.jpeg)
_Laser cutting the wood_

![The PCB mount](IMG_7957.png)
_The PCB mount_

The PCB fit pretty well. The only issue is that there was a bit of space between the bottom of the PCB and the wood. We solved this by adding some washers in between the two surfaces.

![The assembled enclosure](IMG_0099.jpeg)
_The assembled enclosure_

The final enclosure! The PCB fits snugly in between the walls and the bolts hold everything together.

<!-- ![Top view showing connectors for LED wire, accelerometer and connecting wires](IMG_0100.jpeg)
_Top view showing connectors for LED wire, accelerometer and connecting wires_ -->

![Testing out the LED pointed down on the object](IMG_0105.jpeg)
_Testing out the LED pointed down on the object_

We could now wire everything together. The LED strip fits below the PCP mount and points directly downward to illuminate the acrylic.

![Testing the effect in a darker environment](IMG_0109.jpeg)
_Testing the effect in a darker environment_

It works! We tested in a darker environment.

![Our first rehearsal using the circle object](IMG_6624.JPG)
_Our first rehearsal using the circle object_

With our first prototype working, began building a second. Using the same design, we hooked a wooden cube to the sensor mount. We thought the different weights would be an interesting contrast. The cube is also more natural to hold and manipulate directly.

![The cube](IMG_0121.jpeg)
_The cube_

![Testing both the cube and circle](img/IMG_8162.png)
_Testing both the cube and circle_

### Finishing Touches

For the final performance we mounted the objects on a large rack designed for holding a whiteboard. We covered the frame in black cloth and hid the wiring beneath.

![The frame](img/IMG_0150.jpeg)
_The frame_

<h2 id="Electronics">Electronics</h2>

![schematic](img/electronics-schematic.png)
_Schematic_

Each of our objects needed one accelerometer, one light sensor, and an LED. They connect to the central controller which connects to the computer.

We used an [Arduino Nano 33 IoT](https://store.arduino.cc/products/arduino-nano-33-iot), [MPU6050](https://create.arduino.cc/projecthub/CiferTech/what-is-mpu6050-b3b178) accelerometers and a [TCA9548A I2C Multiplexer](https://www.adafruit.com/product/2717). The LEDs were short strips of an [Adafruit NeoPixel LED strip](https://www.adafruit.com/product/1461).

### Breadboard

The breadboard setup was straightforward. We just needed to connect the multiplexer to the arduino and the accelerometers.

![IMG_0003.jpeg](IMG_0003.jpeg)
_Initial setup with an arduino nano, and two MPU6050 accelerometers routed through a TCA9548A I2C Multiplexer_

We initially tested the modules with an RJ45 cable connecting to the accelerometers.

![Moving the accelerometer to another breadboard](IMG_0004.jpeg)
_Moving the accelerometer to another breadboard_

### Handmade prototype

We needed the electronics on the objects to be as minimal as possible so we designed a circuit that we could fit in a small housing. For our first prototype we soldered the connections by hand.

![Initial circuit design for the hanging object](IMG_0064.jpeg)
_Initial circuit design for the hanging object_

Each object needed 6 connections: power, ground, accelerometer SDA, accelerometer SCL, LED control data, and photo resistor data. The tricky part was avoiding crossed wires.

![Will it fit??](img/IMG_7632.png)
_Will it fit??_

After a long time soldering we had the completed circuit working.

![The soldered circuit](img/IMG_7643.png)
_The soldered circuit_

![Soldered circuit front](IMG_0065.jpeg)
_Soldered circuit front_

### Milled PCB

A HUGE thank you to [Jason Gao](https://itp.jasongao.me/) who helped us design and mill custom PCBs for this project. After we finished the proof of concept we designed our custom PCB and milled it.

![The PCB design](PCB0.png)
_The PCB design_

![The PCB circuit](PCB2.png)
_The PCB circuit_

![Printing the PCBs](IMG_0067.jpeg)
_Printing the PCBs_

![The new PCB with everything connected](img/IMG_7687.png)
_The new PCB with everything connected (except the light strip)_

<h2 id="CodeAndAudio">Code and Audio</h2>

![computer screen showing ableton and pendular patch](img/pendular-computer-screen.png)

The arduino code, max patch, and Ableton file are [on GitHub](https://github.com/ejarzo/pendular).

### Arduino Code

The [arduino code](https://github.com/ejarzo/pendular/blob/master/pendular-arduino/pendular-arduino.ino) reads the accelerometer and light sensor data and transmits it via Serial connection. It also accepts input over serial to control the brightness of the LEDs. We followed [this tutorial](https://learn.adafruit.com/adafruit-tca9548a-1-to-8-i2c-multiplexer-breakout/overview) on setting up the multiplexer to manage the two I2C devices. It uses the [MPU6050_light](https://github.com/rfetick/MPU6050_light) and [Adafruit NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel) libraries.

### Max Patch

![The Max patch](img/pendular-max-patch-presentation.png)
_The Max patch_

The [Max patch](https://github.com/ejarzo/pendular/blob/master/Presets/MIDI%20Effects/Max%20MIDI%20Effect/pendular/swing-controller-2.amxd) reads the serial data and assigns the the values to certain parameters in Ableton. It also gives us live feedback on the state of the objects. We can map the different values by clicking "Map" and the selecting a parameter in Ableton.

### Ableton File

![Screenshot of the Ableton File](img/ableton-screenshot.png)
_Screenshot of the Ableton File_

We used Operator as the primary synth controlled by the cube. The swinging X/Y motion was mapped to a notch filter and a pitch bend. The spinning motion was mapped the the pitch of one oscillator set to a high harmonic, and the speed of the spinning was set to modulate how quickly another oscillator looped.

The circle controlled a chain of effects on the vocals -- mostly delays and distortion to create a wind-like effect that was further modulated by the spinning motion.
