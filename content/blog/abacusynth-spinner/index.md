---
title: 'Abacusynth: Spinner Fabrication'
date: '2022-04-10'
description: ''
tags:
  - 'THESIS'
---

![Sketch of my thesis project: Abacusynth](thesis-sketch2.jpeg)
_Sketch of my thesis project: Abacusynth_

For my [thesis project](/abacusynth-overview) I am creating a synthesizer inspired by an abacus. Its interface consists of four rods, each holding a spinning object. These four objects represent oscillators in the synth. A user can spin them and move them left and right along the rod.

The objects should be as "spinny" as possible, but they also need to move left and right smoothly. I experimented with a lot of ball bearings, but nothing worked as well as a fidget spinner. I wanted the objects to be wood, so I found a small spinner and encased it within within layers of laser-cut wood.

## V1: Minimal Spin

<p>
<video controls name="Initial prototype using a bushing for the rotation" src="IMG_0320.mp4"></video>
<em>Initial prototype using a bushing for the rotation</em>
</p>

I started with using a bushing to spin/slide the object. It slowed down pretty quickly.

## Testing a Fidget Spinner

<p>
<video controls name="Testing a fidget spinner with the breakbeam sensor" src="IMG_0323.mp4"></video>
<em>Testing a fidget spinner with the breakbeam sensor</em>
</p>

Hoping to not reinvent the wheel, I ordered some fidget spinners. They performed exactly as I envisioned -- spinning for multiple minutes. I even [found one](https://www.amazon.com/ATESSON-Stainless-Tri-spinner-Precision-Screwdriver/dp/B06Y5HW7C9/) that had slots already cut out of it, which would allow me to use it with my break-beam setup perfectly.

<!-- <p>
<video controls name="caption" src="IMG_0324.mp4"></video>
<em>caption</em>
</p> -->

<p>
<video controls name="A more compact spinner featuring slots" src="IMG_0325.mp4"></video>
<em>A more compact spinner featuring slots</em>
</p>

<!-- <p>
<video controls name="caption" src="IMG_0326.mp4"></video>
<em>caption</em>
</p> -->

<p>
<video controls name="Testing both spinners at once" src="IMG_0328.mp4"></video>
<em>Testing both spinners at once</em>
</p>

## Building the Housing

![Final Spinner Design](spinner-design-screenshot.png)
_Final Spinner Design_

I designed the housing in Vectorworks. It consists of 5 layers of 1/8" material held together with bolts, that when assembled, encase the spinner tightly.

### Cardboard Prototype

I started with cardboard to make sure everything fit.

![Layer 1](IMG_0331.jpeg)
_Layer 1_

![Layer 2](IMG_0332.jpeg)
_Layer 2_

![Layer 2 with the spinner](IMG_0333.jpeg)
_Layer 2 with the spinner_

![Layer 3](IMG_0334.jpeg)
_Layer 3_

![Layer 4](IMG_0335.jpeg)
_Layer 4_

![Layer 5](IMG_0336.jpeg)
_Layer 5_

![The assembled part](IMG_0329.jpeg)
_The assembled part_

<p>
<video controls name="Testing the spin" src="IMG_0330.mp4"></video>
<em>Testing the spin &#8212; pretty good!</em>
</p>

It worked pretty well! I just needed to make the holes smaller to fit 4/40 screws.

### Wooden Version

![Laser cutting the wooden pieces](IMG_0337.jpeg)
_Laser cutting the wooden pieces_

![The assembled enclosure: front](IMG_0338.jpeg)
_The assembled enclosure: front_

The wood is a bit thinner than cardboard, so there is a slight gap on the edge, where the inner metal is visible.

![The assembled enclosure: profile](IMG_0339.jpeg)
_The assembled enclosure: profile_

<p>
<video controls name="The wooden piece feels very satisfying to spin" src="IMG_0340.mp4"></video>
<em>The wooden piece feels very satisfying to spin</em>
</p>

It feels great to spin, but there's an issue: the bolts stick out dangerously. To solve this I designed the outer two layers such that they would countersink the bolts.

## Countersinking the bolts

The front and back panels would need to be glued to their adjacent layer in order for this to work, since the bolts no longer hold them

### Cardboard Prototype

Back to cardboard...

![Countersink test: front](IMG_0356.jpeg)
_Countersink test: front_

![Countersink test: back](IMG_0357.jpeg)
_Countersink test: back_

![Comparison](IMG_0355.jpeg)
_Comparison_

### Wooden Version

On to wood...

![Front](IMG_0365.jpeg)
_Front_

![Back](IMG_0366.jpeg)
_Back_

Much safer and looks better!

![Side](IMG_0367.jpeg)
_Side_

![Mounted on the rod](IMG_0368.jpeg)
_Mounted on the rod_

## Slide Mechanism

The spinners need to slide left and right smoothly. The inner diameter of the bearing is 1/4" in. I tested using a 2mm rod and wooden beads. They moved quite smoothly, but the rod was too thin to remain rigid, especially when the object was in the middle.

![A wooden bead inserted into the bearing](IMG_0359.jpeg)
_A wooden bead inserted into the bearing_

## Testing two Spinners

![Thin vs thick steel rod](IMG_0363.jpeg)
_Thin vs thick steel rod_

<p>
<video controls name="Testing both spinners at once" src="IMG_0361.mp4"></video>
<em>Testing both spinners at once</em>
</p>

## 3d Printing a Handle

For the final iteration, I 3d Printed a handle that would friction fit into the spinner but allow for easy left/right movement.

### Version 1

![Handle design V1](handle-design-1.png)
_Handle design V1_

![The 3d Printed Handles](./IMG_0537.jpeg)
_The 3d Printed Handles_

![Assembling the spinners with the two new handles and some earlier tests](./IMG_0555.jpeg)
_Assembling the spinners with the two new handles and some earlier tests_

### Final Version

User testing revealed that the spinners should fit the finger better, with a wider curved handle. I updated the design accordingly.

![Handle design V2](handle-design-2.png)
_Handle design V2_

![The 3d print -- pretty rough](./IMG_0656.jpeg)
_The 3d print -- pretty rough_

I sanded the new handles and, after painting the spinners, assembled everything together.

![The assembled inner section](./IMG_0680.jpeg)
_The assembled inner section_

### Final Result

![Closeup of the spinner and handle design](../abacusynth-fabrication/final-photos/1O7A8628.jpg)
_Closeup of the spinner and handle design_
