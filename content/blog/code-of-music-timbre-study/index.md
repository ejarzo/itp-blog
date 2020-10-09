---
title: 'Timbre Study: Additive Synthesizer'
date: '2020-10-08'
description: 'Implementing an additive synth'
tags:
  - 'CODE_OF_MUSIC'
---

<p>
<video style="width: 100%; max-height: none" controls name="Screen capture" src="additive-synth-capture.mp4"></video>
</p>

For my timbre study I created an [Additive Synth](https://additive-synth.netlify.app/). It consists of four oscillators and one noise source each routed to its own amplitude envelope. Oscillator 1 also controls the overall envelope - all other oscillators (including noise) are routed through Oscillator 1.

I wanted to replicate one of my favorite features of synths like Ableton's [Operator](https://www.ableton.com/en/packs/operator/) -- the ability to loop envelopes, letting you create detailed rhythmic textures. In addition to the base harmonic, volume, detune, wave type (sine, triangle, square, or sawtooth) and [ADSR envelope](<https://en.wikipedia.org/wiki/Envelope_(music)>), each oscillator also has a loop control, which determines the interval at which the envelope repeats.

I wanted to focus attention on the timbre so I only added limited options for controlling the notes being played. The synth plays a sequence of 7th chord arpeggios in a set scale that can be changed by moving the mouse left and right. You can also change the octave by pressing `Z` and `X`. There are three "voices" meaning that three notes can be played at the same time.

For the visual feedback I mapped the averaged the output's Fourier transform to the color spectrum. This can be seen most easily by filtering out the high frequencies with the low pass filter which causes the color to become darker and redder.

[Try it out](https://additive-synth.netlify.app/) or [view the source](https://github.com/ejarzo/additive-synth).
