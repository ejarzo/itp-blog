---
title: 'Week 1: Image and Video'
date: '2020-11-10'
description: ''
tags:
  - 'ICM'
---

<iframe src="https://player.vimeo.com/video/477793898?color=eae6de" width="640" height="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

For my image project I have created [Texturizer](https://texturizer.netlify.app/), a program that generates moving textures from random stock images.

It uses the Unsplash [random endpoint](https://source.unsplash.com/random) to fetch a source image on user click and then begins "painting" based on that picture. The algorithm randomly selects 2000 points at which to begin drawing. Each point samples the original image and uses the color values to modulate the size and speed of a rectangle starting at that point. The rectangles are drawn almost transparently which leads to an "ink blot" type effect. Sometimes the result looks like a modern abstract painting, other times it looks more like an early 2000s screen-saver. ¯\\\_(ツ)\_/¯

Controls: Click to generate a new image. Move mouse to adjust painting direction.

[Try it out](https://texturizer.netlify.app/) or [view the source](https://github.com/ejarzo/texturizer/blob/master/script.js).

![screenshot](./screenshots/screenshot1.png)

<!-- ![screenshot](./screenshots/screenshot2.png) -->

![screenshot](./screenshots/screenshot3.png)

![screenshot](./screenshots/screenshot4.png)

![screenshot](./screenshots/screenshot5.png)

![screenshot](./screenshots/screenshot6.png)

![screenshot](./screenshots/screenshot7.png)

![screenshot](./screenshots/screenshot8.png)

![screenshot](./screenshots/screenshot9.png)

![screenshot](./screenshots/screenshot10.png)

![screenshot](./screenshots/screenshot11.png)

![screenshot](./screenshots/screenshot12.png)

<!-- ![screenshot](./screenshots/screenshot13.png) -->
