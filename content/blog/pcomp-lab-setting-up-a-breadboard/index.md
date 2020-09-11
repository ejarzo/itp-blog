---
title: 'Lab: Setting up a Breadboard'
date: '2020-09-10T22:12:03.284Z'
description: 'Building my first circuit'
tags:
  - 'PHYSICAL_COMPUTING'
---

[Lab Guide](https://itp.nyu.edu/physcomp/labs/breadboard/)

In this lab I will familiarize myself with the breadboard and built a basic circuit. The circuit will
illuminate an LED when powered.

![Figure 1. Schematic image of a 220-ohm resistor and an LED connected to a 7805 5-volt regulator. Regulator pins are numbered from left to right. One terminal of the resistor is connected to the regulator’s output pin (pin 3), and the LED’s anode is connected to the other terminal of the resistor. The LED’s cathode is attached to the regulator’s ground pin (pin 2). A 9-12V DC power source is connected to the regulator’s voltage in (pin 1) and ground (pin 2)](./led_resistor_schem.png)
_The schematic I will be implementing_

## Will it Light?

Before starting I will test my understanding by answering the ["Will it light"](https://itp.nyu.edu/physcomp/labs/breadboard/#Will_it_Light_Test_Your_Understanding) questions posed in the Lab.

1. Yes, the circuit is complete
2. No, the resistor is not connected to ground, and the LED is not connected to the input voltage
3. Yes, the new wire connects the resistor’s output voltage to the LED’s input, putting the two components in series with each other.
4. No. The current is not ‘forced’ to go through the LED because there is conductive material connecting both of its ends (underneath the breadboard row)
5. Yes, this looks complete

## Wiring the Circuit

I began by connecting the input voltage and ground to the 5V Voltage Regulator and connecting the regulator's output voltage to the 'positive bus' using the red wires and to the 'ground bus' using the blue wires.

![Initial breadboard setup featuring a 5V voltage regulator connected to the breadboard's positive voltage and ground](./breadboard-initial.jpeg)
_Wiring the voltage regulator_

I then added a 220Ω resistor in series with a white LED going from positive voltage to ground.

![Breadboard with a resistor and LED in series connecting Vin to Ground](./breadboard-with-led.jpeg)
_This should work, right?_

At this point I thought the circuit should work, but when I connected the power the LED did not turn on,
although the voltage regulator did heat up. My mistake was incorrectly measuring the input voltage from the DC power adapter.
I had thought that the positive voltage was coming from the inner part of the plug when it was actually coming from the outer section. This meant
that the power entering the regulator was -9V instead of 9V.

![DC Voltage Measurement showing 9.15V with ground connected to the inner part of the jack](./dc-voltage-measurement.jpeg)
_Measuring the voltage_

Reversing the wires in my power jack configuration solved the issue, and the LED lit up!

![Working Circuit](./working-circuit.jpeg)
_The working circuit_
