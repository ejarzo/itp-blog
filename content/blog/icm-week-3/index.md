---
title: 'Drawing Sound'
date: '2020-11-24'
description: ''
tags:
  - 'ICM'
---

# Week 4: Sound

<iframe src="https://player.vimeo.com/video/483319514?color=eae6de" width="640" height="463" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

For my p5 audio experiment I extended my [last assignment](/icm-week-1) to produce sound. [The new version](https://deploy-preview-1--texturizer.netlify.app/) now plays music based on the image data. The first 5 randomly selected points are now tied to an oscillator or, if the pixel at that point is unsaturated, a noise source. The points move based on the colors and mouse position. The sound at a point is placed in stereo space based on that point's x position, and the note value is based on the brightness of the point in the _original_ image that the current point is passing over. This value is mapped to a note in the pentatonic scale.

Each oscillator is also connected to a low pass filter whose cutoff frequency is based on the width of the current point. The Perlin noise used to render the points is also used to control the detune amount. The mouse position also controls reverb on the output -- closer to the edges increases the amount.

[Try it out](https://deploy-preview-1--texturizer.netlify.app/) or [view the source](https://github.com/ejarzo/texturizer/pull/1/files).

I would like to continue enriching the sound by dynamically changing scales and playing with the oscillator harmonics. The pentatonic scale always sounds "nice" but I would like for more intense images to somehow produce a more intense sound. I would also like to incorporate the extreme pixels (connected by the thin white lines) into the audio process, perhaps with a melodic loop dictated by their positions.
