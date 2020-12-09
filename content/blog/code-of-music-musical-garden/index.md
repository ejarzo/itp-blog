---
title: 'Musical Garden'
date: '2020-12-09'
description: ''
tags:
  - 'CODE_OF_MUSIC'
  - 'ICM'
---

# Musical Garden

<iframe src="https://player.vimeo.com/video/488997563?color=eae6de" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<p></p>

The [Musical Garden](https://musical-garden.netlify.app/) is an experiment in making music by planting and tending to a virtual garden. The two interactions are planting seeds and watering. Plants produce spacial audio that depends on which "soil" they are planted in. The user's mouse acts as the audio listener, so plants near to the mouse will be louder.

[Try it out](https://musical-garden.netlify.app/) or [view the source](https://github.com/ejarzo/musical-garden).

### Plant Rules

Each seed type represents an oscillator waveform: circle = sine, square = square, equilateral triangle = triangle, right triangle = sawtooth. Each type has [its own L-System rules](https://github.com/ejarzo/musical-garden/blob/master/sketch.js#L75) for how to grow.

### Ground Rules

Each [ground area](https://github.com/ejarzo/musical-garden/blob/master/sketch.js#L18) dictates how the plants should play audio. They define which synth the plant should use (incorporating the base oscillator type) and what to do when the plant is watered. They also attach audio effects specific to that area.

#### Brown/Purple Circles

<!-- ![Ground circles](./circles.png) -->

- Uses Tone.MonoSynth
- Plants play melody based on the current L-System Sentence where `[` means increase the note value and `]` means increase the note value
- This means that shorter plants have shorter melodies

#### Blue Squares

<!-- ![Ground squares](./squares.png) -->

- Uses Tone.FMSynth
- Plants placed in this area add a note to a sequence played left to right -- the note value is determined by the Y position and the time is determined by the X position.
- Watering increases note duration and modulates the FM Synth

#### Red Diamonds

<!-- ![Ground diamonds](./diamonds.png) -->

- Uses Tone.MembraneSynth
- Each plant loops one note on a random (within a set) interval -- this generates polyrhythms between different plants.
- Watering increases the synths decay time and also randomizes the note.

#### Brown/Yellow Triangles

<!-- ![Ground triangles](./triangles.png) -->

- Uses Tone.MonoSynth
- Each plant adds a voice to a chord that changes at random intervals, so all plants in this area are playing one note of the same chord.
- Watering increases the filter frequency and adds delay once the plant has stopped growing.

#### Black Squares (The Void)

<!-- ![Ground void](./void.png) -->

- Uses Tone.MonoSynth
- Each plant is assigned a random frequency
- Watering adds vibrato
- Placing a plant changes the vibrato rate for the whole area
