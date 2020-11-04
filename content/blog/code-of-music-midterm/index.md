---
title: 'Midterm: Synth Station'
date: '2020-10-23'
description: ''
tags:
  - 'CODE_OF_MUSIC'
---

<iframe src="https://player.vimeo.com/video/471502084?color=eae6de" width="640" height="463" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

The [Synth Station](https://synth-station.netlify.app/) is a music making web device that combines two of my previous studies, the [Drum Radar](/code-of-music-rhythm-study) and the [Additive Synth](/code-of-music-timbre-study). It allows you to control a synthesizer and drum machine simultaneously.

You play this device by moving the mouse around the field, adjusting parameters, and by clicking and dragging. Holding down the mouse sustains the current notes adds delay, distortion, and reverb that are then modified by dragging while still holding down the mouse.

The beat is represented as a circle, where each drum track has a radius and number of divisions. There are six samples that can be toggled on/off and a slider to control the kit's timbre.

The synth consists of four oscillators and one noise generator. It plays quarter note 7th chord arpeggios, and the chord's root note is controlled by moving the mouse across left and right. You can adjust each oscillator's type, base harmonic frequency, volume, detune, and ADSR envelope. You can also set the envelope to loop at a given interval.

[Try it out](https://synth-station.netlify.app/) or [view the source](https://github.com/ejarzo/pulse).

I found that combining the two projects resulted in a fairly expressive device. Its main limitation as a performance tool is the reliance on the mouse since it's hard to control multiple things at once, so one idea I had was to make it controllable by two people -- one on drums and one on the synth. This would probably work best on a touch device.

I also wanted to add more control over the notes played by the synthesizer, perhaps by using a more conventional sequencer or something that mirrors the circular pattern that the drums follow. I do like how the synth is more freeform and improvisational than the rhythm so I would want to keep that aspect. Even the ability to play it via MIDI device could work.
