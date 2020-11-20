---
title: 'Neural Networks: Study'
date: '2020-11-20'
description: ''
tags:
  - 'CODE_OF_MUSIC'
---

<p>
<video style="width: 100%; max-height: none" controls name="Video Capture of the P5 Sketch" src="drums-rnn-capture.mp4"></video>
</p>

This week I started work on a program that I will eventually use for my [Physical Computing Project 3](/pcomp-project3-pt1/). The project will be a miniature physical drumming device that plays rhythms based on an initial beat that the user taps out. My [P5 Sketch](https://editor.p5js.org/ejarzo/sketches/b6c3AP7vQ) uses [DrumsRNN](https://github.com/magenta/magenta/tree/master/magenta/models/drums_rnn) to generate short loops based on a user defined beat. It allows you to play the drum kit using the keyboard and switch between your rhythm and the generated rhythm.

I eventually want to change the interaction so that instead of an already defined loop, the loop starts recording when the user starts playing and ends with a key press. Then the timing of the individual hits will be inferred and quantized based on the overall time. Then the new rhythm will be generated based on those parameters.
