---
title: 'Abacusynth: Housing Fabrication'
date: '2022-05-04'
description: ''
tags:
  - 'THESIS'
---

![Front view](final-photos/1O7A8617.jpg)

My thesis, the [Abacusynth](/abacusynth-overview), is a synthesizer inspired by an abacus.

## First Prototypes

I began with some scrap wood connected by a steel rod, and I used small breadboards mounted with rubber bands to hold the sensors in place. I was using a time-of-flight sensor to measure distance and a breakbeam IR sensor to measure rotation.

![Early Prototype](IMG_0301.jpeg)
_Early Prototype_

![Prototyping the sensor with a rubber band](IMG_0307.jpeg)
_Prototyping the sensor with a rubber band_

## Designing the Enclosure

I sketched out what I wanted the final enclosure to look like. Initially I wanted knobs on both sides, one to control the waveform, and one to control the volume. This changed pretty quickly, since that added a lot of complexity. I opted for rotary encoders with push buttons so that I could combine multiple controls in a single knob.

![Sketch of the final design](IMG_0351.jpeg)
_Sketch of the final design_

The first thing to do was to design the walls that hold the sensors and rods. I started with a cardboard rectangle with holes for the sensors: the distance sensor on top and the break-beam on the bottom.

![Testing the sensors with laser cut cardboard](IMG_0396.jpeg)
_Testing the sensors with laser cut cardboard_

Once that was working a moved on to wood. The inner section would be removable, since it would not need any electronics -- it would just hold the rods and spinners.

![The first wooden inner section](IMG_0411.jpeg)
_The first wooden inner section_

I used 1/2" standoffs to connect the inner and outer sections. The PCB boards fit pretty snugly inside.

![Building the wall structure with sensors in between two layers of wood](IMG_0413.jpeg)
_Building the wall structure with sensors in between two layers of wood_

## New Design

![Designing multiple layers in Vectorworks](./design-layout.png)
_Designing multiple layers in Vectorworks_

With the prototype working, I designed the final enclosure in Vectorworks. It consisted of multiple layers of wood that would stack to create the hollow walls.

![Side view of the new design](./design-profile.png)
_Side view of the new design_

The walls would be connected by 1/2" square dowels that I would cut by hand. They would fit within the square cutouts on the inner layer. The base would be 1/2" plywood, also cut by hand. I created a 3d render to make sure everything fit together.

![3D render of the new design](./design-3d.png)
_3D render of the new design_

I then arranged the panels for laser cutting. The inner wall sections would be made up of two 1/4" (really 0.2") pieces and one 1/8" (really 0.12") to add up to just over 1/2", and the outer panels are all on on 1/8" wood.

![Arranging the design for laser cutting](./laser-cut-layout.png)
_Arranging the design for laser cutting_

Time to cut! I started with cardboard to make sure the design worked.

![Laser-cutting the new design in cardboard](IMG_0439.jpeg)
_Laser-cutting the new design in cardboard_

![All of the pieces](IMG_0441.jpeg)
_All of the pieces_

![The assembled enclosure](IMG_0443.jpeg)
_The assembled enclosure_

![The assembled enclosure -- back view](IMG_0444.jpeg)
_The assembled enclosure -- back view_

![Enclosure with the rods](IMG_0446.jpeg)
_Enclosure with the rods_

![Front panel](IMG_0448.jpeg)
_Front panel_

![Ports on the back](IMG_0450.jpeg)
_Ports on the back_

The one mistake I noticed with the cardboard prototype is that I had reversed the PCBs in the design -- the holes for the encoders were closer to the back than the front. Switching this allowed the PCBs to fit and also made the design better by allowing more room for the cables and the interactive pieces to be closer to the user.

## Adding the Electronics

I could now add the electronics and see if everything worked. For more details on this, see the [PCB development post](/abacusynth-pcb-1).

![Attaching the first PCB to the inner wall](IMG_0452.jpeg)
_Attaching the first PCB to the inner wall_

<p>
<video controls name="Testing the electronics: Distance, rotation, and encoder" src="IMG_0455.mp4"></video>
<em>Testing the electronics: Distance, rotation, and encoder</em>
</p>

<p>
<video controls name="Testing with two rods" src="IMG_0456.mp4"></video>
<em>Testing with two rods</em>
</p>

![Connecting the wires and the speaker](IMG_0458.jpeg)
_Connecting the wires and the speaker_

<p>
<video controls name="More testing" src="IMG_0459.mp4"></video>
<em>More testing</em>
</p>

## Final Wooden Version

Now that I was confident in the design, it was time to cut the wood. I taped over it to minimize burn marks.

![The inner pieces on thicker wood](IMG_0469_1.jpeg)
_Laser-cutting the wood_

![Plastic standoffs fit in the inner pieces](IMG_0470_1.jpeg)
_The inner pieces on thicker wood_

The plastic standoffs fit into hexagonal holes in the inner walls, so that the outer walls could both screw in to the same hole.

![Inner section made up of three layers](IMG_0471_1.jpeg)
_Plastic standoffs fit in the inner pieces_

![The two assembled walls](IMG_0472_1.jpeg)
_Inner section made up of three layers_

![The inner wall -- the large hole is for the wires and the small square holes hold the support beams](IMG_0473.jpeg)
_The two assembled walls_

![caption](IMG_0474.jpeg)
_The inner wall -- the large hole is for the wires and the small square holes hold the support beams_

![The front panel is cut out of the thicker wood to allow for a more rounded sanded edge (after sanding)](IMG_0476.jpeg)
_The front panel is cut out of the thicker wood to allow for a more rounded sanded edge (after sanding)_

![Profile view](IMG_0477.jpeg)
_Profile view_

![I wasn't yet set on the front panel design so used the cardboard](IMG_0478.jpeg)
_I wasn't yet set on the front panel design so used the cardboard_

![Side view with the front panel](IMG_0479.jpeg)
_Side view with the front panel_

![Assembling the removable inner section](IMG_0480.jpeg)
_Assembling the removable inner section_

### Drilling it all Together

The inner walls are screwed to the base and the 1/2" dowel support rods. These screws are covered up by the outer wall.

![Drilling the walls to the base](IMG_0501.jpeg)
_Drilling the walls to the base_

![Using the laser cut pilot holes](IMG_0502.jpeg)
_Using the laser cut pilot holes_

![Making sure the angle was square](IMG_0503.jpeg)
_Making sure the angle was square_

![The structure connected by the base and square dowel](IMG_0504.jpeg)
_The structure connected by the base and square dowel_

![Closer view](IMG_0505.jpeg)
_Closer view_

![The outer walls would cover up the screws](IMG_0508.jpeg)
_The outer walls would cover up the screws_

<p>
<video autoplay muted loop name="Moving/Spinning is much more firm than with the cardboard prototype" src="IMG_0509.mp4"></video>
<em>Moving/Spinning is much more firm than with the cardboard prototype</em>
</p>

One quirk of the design is that the shaft collars holding the rods in place make it a bit difficult to remove the inner section. I had to cut out a slot in the top and glue it to the inner piece so that you could slide out the entire section.

![Cutting slots in the inner wall](IMG_0510_1.jpeg)
_Cutting slots in the inner wall_

![Fitting rubber in the gaps](IMG_0511_1.jpeg)
_Fitting rubber in the gaps_

![Glueing the cutout piece to the removable section](IMG_0512.jpeg)
_Glueing the cutout piece to the removable section_

![The notch](IMG_0522.jpeg)
_The notch_

<p>
<video autoplay muted loop name="Removing the inner section" src="IMG_0524.mp4"></video>
<em>Removing the inner section</em>
</p>

![The old and the new...](IMG_0514.jpeg)
_The old and the new..._

### Sanding

I sanded the visible edges that were burnt during the laser cutting process. This revealed the wood grain and made the surface smooth to the touch.

![Sanding the edges](IMG_0515.jpeg)
_Sanding the edges_

![Looks and feels much better sanded](IMG_0516.jpeg)
_Looks and feels much better sanded_

![Sanding the outer-facing panels](IMG_0519_1.jpeg)
_Sanding the outer-facing panels_

![Looking pretty good](IMG_0520.jpeg)
_Looking pretty good_

## Final Assembly

![Ribbon cables from the sensors](IMG_0527.jpeg)
_Ribbon cables from the sensors_

![Holes for the sensors](IMG_0528.jpeg)
_Holes for the sensors_

![Adding the spinners to test if everything works](IMG_0529.jpeg)
_Adding the spinners to test if everything works_

<p>
<video autoplay muted loop name="Testing the build" src="IMG_0530.mov"></video>
<em>Testing the build</em>
</p>

![All four spinners attached to the inner section](IMG_0540.jpeg)
_All four spinners attached to the inner section_

<p>
<video controls name="All four rods working!" src="IMG_0541.mp4"></video>
<em>All four rods working!</em>
</p>

![caption](IMG_0544.jpeg)
_caption_

<p>
<video controls name="Testing with the speaker mounted" src="IMG_0546.mp4"></video>
<em>Testing with the speaker mounted</em>
</p>

![The assembled, working enclosure](IMG_0555.jpeg)
_The assembled, working enclosure_

![The front face, cut out of the thicker plywood](IMG_0557.jpeg)
_The front face, cut out of the thicker plywood_

![The back panel](IMG_0558.jpeg)
_The back panel_

![Closeup of the front panel](IMG_0561.jpeg)
_Closeup of the front panel_

### Encoder Knobs

The final step was to build knobs for the four encoders on the left wall. I started by just sanding a piece of wood to get a feel for the size.

![Sanded cylinder knob](IMG_0590.jpeg)
_Sanded cylinder knob_

I then used a drill bit to cut out cylindrical pieces. These were much cleaner and felt/looked nicer, however I needed a connection piece to hold firmly on to the potentiometer.

![Wooden knob v2](IMG_0592.jpeg)
_Wooden knob v2_

![Four knobs cut from various scrap materials](IMG_0594.jpeg)
_Four knobs cut from various scrap materials_

For the final design, I 3d printed an insert and laser cut circular layers of wood.

![Encoder insert](./encoder-insert.png)
_Encoder insert_

![Half of the knob showing the insert](IMG_0616.jpeg)
_Half of the knob showing the insert_

![The four inserts](IMG_0617.jpeg)
_The four inserts_

![I glued the knobs together](IMG_0618.jpeg)
_I glued the knobs together_

![All four completed knobs](IMG_0622.jpeg)
_All four completed knobs_

![The knobs after sanding](IMG_0624.jpeg)
_The knobs after sanding_

## Finishing and Painting

It was now time to take everything apart so that I could finish the wood and paint the knobs and spinners.

![Ever so carefully removing the electronics](IMG_0658.jpeg)
_Ever so carefully removing the electronics_

I used a clear spray-on lacquer for the wood, since I wanted to retain its bright natural color.

![Lacquer for the wood](IMG_0662.jpeg)
_Lacquer for the wood_

I first sprayed multiple layers on to the disassembled pieces.

![Spraying lacquer onto the panels](IMG_0663.jpeg)
_Spraying lacquer onto the panels_

I then partially assembled it and added another few coats. I taped off the inner sections that I did not want finished (not pictured).

![The finished enclosure](IMG_0667.jpeg)
_The finished enclosure_

I primed the spinners and knobs in white to prepare them for acrylic paint.

![Priming the spinners](IMG_0660.jpeg)
_Priming the spinners_

![Priming the knobs](IMG_0661.jpeg)
_Priming the knobs_

After everything dried, I added the electronics back in and miraculously everything worked.

![Re-assembling the enclosure](IMG_0668.jpeg)
_Re-assembling the enclosure_

![The finished front panel](IMG_0669.jpeg)
_The finished front panel_

I painted each pair of sliders and knobs a different color. I didn't really plan out the pallette in advance, but wanted something playful.

![Preparing to paint the knobs and sliders](IMG_0670_2.jpeg)
_Preparing to paint the knobs and sliders_

![Painting the first one blue](IMG_0671.jpeg)
_Painting the first one blue_

<!--
![caption](IMG_0673.jpeg)
_caption_

![caption](IMG_0674.jpeg)
_caption_

![caption](IMG_0675.jpeg)
_caption_ -->

![Letting them dry](IMG_0678.jpeg)
_Letting them dry_

![The four spinners attached](IMG_0680.jpeg)
_The four spinners attached_

![Everything assembled!](IMG_0681.jpeg)
_Everything assembled!_

## Final Result

And here are some nicer photos of the final product!

![Front view](final-photos/1O7A8617.jpg)
_Front view_

![Closeup of the spinners](final-photos/1O7A8619.png)
_Closeup of the spinners_

![Side view](final-photos/1O7A8622.png)
_Side view_

![Closeup of the red spinner](final-photos/1O7A8626.jpg)
_Closeup of the red spinner_

![The green spinner in motion](final-photos/1O7A8628.jpg)
_The green spinner in motion_

![Multiple spinners in motion](final-photos/1O7A8629.jpg)
_Multiple spinners in motion_

![Closeup of the left wall](final-photos/1O7A8638.jpg)
_Closeup of the left wall_
