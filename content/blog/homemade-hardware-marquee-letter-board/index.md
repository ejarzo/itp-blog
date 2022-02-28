---
title: 'Marquee Letter PCB'
date: '2022-02-28'
description: ''
tags:
  - 'HOMEMADE_HARDWARE'
---

Finalizing the Marquee Letter project started [last week](/homemade-hardware-marquee-letter/).

![The updated schematic](schematic.png)
_The updated schematic_

![The updated board design](board-design.png)
_The updated board design_

![The milled circuit board](IMG_0287.jpeg)
_The milled circuit board_

![Assembling the SMD parts](IMG_0289.jpeg)
_Assembling the SMD parts_

![Placing the parts with solder paste](IMG_0290.jpeg)
_Placing the parts with solder paste_

![Soldering the circuit with the heat gun](IMG_0291.jpeg)
_Soldering the circuit with the heat gun_

![Programming the ATtiny](IMG_0292.jpeg)
_Programming the ATtiny_

The Arduino Code:

```cpp
#include <Math.h>
#include <CapacitiveSensor.h>

CapacitiveSensor   cs_4_2 = CapacitiveSensor(2, 3);

void setup() {
  pinMode(0, OUTPUT);
  cs_4_2.set_CS_AutocaL_Millis(0xFFFFFFFF);
}

void loop() {
  long total1 =  cs_4_2.capacitiveSensor(30);
  int del = 0;
  if (total1 > 200) {
    analogWrite(0, 255);
  } else {
    analogWrite(0, 80);
  }
}
```

<p></p>

![Plugging it in](IMG_0293.jpeg)
_Plugging it in_

![Adding the capacitive sensor](IMG_0298.jpeg)
_Adding the capacitive sensor_

<p>
<video style="width: 100%; max-width: unset" muted autoplay loop name="CapacitiveTouchTest" src="./IMG_0297.mov"></video>
<em>The finished board</em>
</p>
