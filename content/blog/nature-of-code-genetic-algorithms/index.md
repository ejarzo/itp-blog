---
title: 'Concept: Genetic Algorithms for Melody Generation'
date: '2021-04-11'
description: ''
tags:
  - 'NATURE_OF_CODE'
---

This week I developed a concept for melody generation using genetic algorithms. The idea is that, starting with a chord progression, the algorithm would generate melodies that "sound good" playing over the chords. Fitness would be determined by harmony with the chords, as well as the difference in note durations and intervals between notes. Ideally this would lead to some interesting melodies that flow from note to note.

## Scenario

> Describe the scenario. What is the population? What is the environment? What is the “problem” or question? What is evolving? What are the goals?

The population would be a number of melodies in a scale. A note has a frequency and a duration. The environment would be a starting chord progression that the melodies would play over. The goal is to produce a melody that "Sounds good" over the chord progression.

## Phenotype and Genotype

> What is the “thing” that is evolving? Describe it’s phenotype (the “expression” of its virtual DNA) and describe how you encode its genotype (the data itself) into an array or some other data structure.

The melody would be evolving. I imagine the starting population would be a series of random melodies (random notes and durations) in a scale.

## Fitness Function

> What is the fitness function? How do you score each element of the population?

Fitness could be calculated by determining 3 things: The note's harmony with the underlying chord, the interval between the note and the previous note, and the duration of the note compared to the previous note. The harmony constraint lead to melodies that follow the chord pattern while the interval and duration constraints would lead to more natural sounding melodies -- there should be few large jumps between note values and note lengths.

## Mutation and Crossover

> Are there any special considerations to mutation and crossover to consider or would the standard approaches work?

I think mutation would be important in producing interesting melodies -- it would affect both note values and durations (it also would be good to incorporate note velocity or loudness). Crossover might be tricky and require some trial and error -- I can forsee some challenges with figuring out how to blend melodies of different arrangements because the notes all have different durations. It would probably be best to start with a quantized grid so that all notes are the same length and add durations after.
