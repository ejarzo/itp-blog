---
title: 'Melody Study: Strum Sequencer'
date: '2020-10-02'
description: 'A sequencer that you strum'
tags:
  - 'CODE_OF_MUSIC'
---

<p>
<video style="width: 100%; max-height: none" controls name="Strum Sequencer capture" src="strum-sequencer-capture.mp4"></video>
</p>

The [Strum Sequencer](https://strum-sequencer.netlify.app/) is a sequencer that you play by 'strumming' or moving your mouse across 8 lines. Each line is set to a note in the scale, indicated by the column of circles. I initially wanted to make a new way of adding rhythm to a melody, but the first iteration -- just the lines and note controls -- wasn't as engaging as I had hoped.

I was interested in exploring how melodies sound in relation to notes in the scale, so I added one more control: the square buttons on the side. These allow you to select a note to play on a loop in the background. Experimenting with this setup allows you to get a better understanding of the "feel" of different notes in a scale -- for example, the same melody played over the root sounds much different than over the 6th. It also lets you change key and scale which helps showcase how the different scales sound in relation to each other.

[Try it out](https://strum-sequencer.netlify.app/) or [view the source](https://github.com/ejarzo/strum-sequencer).

I think this would work best on a touch device since you wouldn't have to move your cursor back and forth as much. Unfortunately I didn't have time to optimize it for a phone/tablet. One thing that I wanted to add was a way to record your "strum" and then play it back in a loop. That way you could really experiment with different rhythms and get a good sense of how they sound in the context of a song -- this would be a good way of making the device feel a bit more structured.
