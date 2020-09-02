import React from "react"
import color from "color"
import { TAGS } from "../utils/tags"
import { rhythm, scale } from "../utils/typography"

export default ({ tags = [] }) =>
  tags.map(tag => (
    <span
      className="tag font--monospace"
      key={tag}
      style={{
        display: "inline-block",
        textTransform: "uppercase",
        background: color(TAGS[tag].color).lighten(0.1).toString(),
        color: color(TAGS[tag].color).darken(0.7).toString(),
        marginRight: rhythm(1 / 4),
        borderRadius: rhythm(1 / 6),
        padding: `${rhythm(1 / 12)} ${rhythm(1 / 4)}`,
        fontSize: "60%",
        // fontSize: "80%",
      }}
    >
      {TAGS[tag].label}
    </span>
  ))
