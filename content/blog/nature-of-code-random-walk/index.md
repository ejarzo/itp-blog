---
title: 'Random Walk'
date: '2021-02-07'
description: ''
tags:
  - 'NATURE_OF_CODE'
---

<iframe style="padding: 15px; border: 2px solid rgba(0,0,0,0.3)" width="100%" height="840" src="https://editor.p5js.org/ejarzo/embed/vbJkNnhZJ"></iframe>

[Open sketch](https://editor.p5js.org/ejarzo/sketches/vbJkNnhZJ)

My [random walk](https://en.wikipedia.org/wiki/Random_walk) is an atmospheric musical painting controlled by placing shapes onto a canvas. The different types of shape (circle, square, triangle, sawtooth) correspond to different audio waveforms. Each shape produces a note that is within a certain chord (which can be changed with the `a` key) and moves randomly over a 'terrain' of Perlin noise that dictates the shape's color as well as the cutoff frequency of a low pass filter with a high Q factor -- this produces the whistling-like effect as the shapes move around. The shape's x coordinates are also tied to their position in stereo space.

As a next step I would definitely want to experiment with the different types of walks and add more variation to the movements.
