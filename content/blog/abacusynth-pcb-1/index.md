---
title: 'Abacusynth PCB Development'
date: '2022-04-11'
description: ''
tags:
  - 'HOMEMADE_HARDWARE'
  - 'THESIS'
---

![Sketch of my thesis project: Abacusynth](thesis-sketch2.jpeg)
_Sketch of my thesis project: Abacusynth_

For my thesis project I am creating a synthesizer inspired by an abacus. Its interface consists of four rods, each holding a spinning object. These four objects represent oscillators in the synth. A user can spin them and move them left and right along the rod. Each rod needs a distance sensor facing inwards to measure the object's position and an encoder facing outwards which is used to adjust the harmonic of the oscillator and change the waveform. A breakbeam sensor is used to detect rotation, but this is separate from the PCB -- for that I am using [these sensors](https://www.adafruit.com/product/2167).

![PCB Schematic](PCB-schematic.png)
_PCB Schematic_

![PCB board design](PCB-board.png)
_PCB board design_

![The milled board](IMG_0390.jpeg)
_The milled board_

![Adding the components with solder paste](IMG_0391.jpeg)
_Adding the components with solder paste_

![Soldering using a heat gun](IMG_0394.jpeg)
_Soldering using a heat gun_

![The back of the board](IMG_0393.jpeg)
_The back of the board_

<p>
<video controls name="Testing the distance sensor" src="IMG_0392.mov"></video>
<em>Testing the distance sensor</em>
</p>

![The board mounted on the inner wall](IMG_0399.jpeg)
_The board mounted on the inner wall_

![side view](IMG_0395.jpeg)
_side view_

![The distance sensor aligns with the hole](IMG_0397.jpeg)
_The distance sensor aligns with the hole_

![The other side screws into the board and encoder](IMG_0398.jpeg)
_The other side screws into the board and encoder_
