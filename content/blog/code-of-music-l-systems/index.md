---
title: 'L-Systems Study'
date: '2020-11-13'
description: ''
tags:
  - 'CODE_OF_MUSIC'
---

<iframe src="https://player.vimeo.com/video/479367671?color=eae6de" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

This week [Pippa](https://www.pippakelmenson.com) and I experimented with us L-Systems to control sound and visuals.

We started with a tutorial by [necessary-disorder](https://necessarydisorder.wordpress.com/) and created a visualization based on two spinning circles and the transition between the them -- which form a sort of coil. The L-System controls how much that coil is wound, tightening and loosening based on the current generation of instructions.

In our [original sketch](https://glitch.com/edit/#!/beneficial-purrfect-carp?path=script.js%3A59%3A10) added sound by modulating an oscillators pitch in relation to the tightness of the coil -- similar to how one tunes a stringed instrument.

In a [later iteration](https://editor.p5js.org/ejarzo/sketches/u9SX_XS2C) we used two [GrainPlayers](https://tonejs.github.io/docs/r13/GrainPlayer) playing a recorded sample. In addition to changing the pitch, the tightness of coil also affects how quickly the sample is looped. Each circle also had manual slider inputs which control the volume and initial pitch of the sample, represented as the circle's radius and rotational speed, respectively.
