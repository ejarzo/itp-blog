import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Color from "color"
import { THEME_COLORS } from "../utils/color"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link style={{ boxShadow: `none`, color: `inherit` }} to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 style={{ marginTop: 0 }}>
        <Link style={{ boxShadow: `none`, color: `inherit` }} to={`/`}>
          {title}
        </Link>
      </h3>
    )
  }

  const { OFF_WHITE } = THEME_COLORS

  return (
    <div
      style={{
        background: OFF_WHITE,
        border: `10px solid ${Color(OFF_WHITE)
          .darken(0.9)
          .fade(0.1)
          .toString()}`,
      }}
    >
      <div
        style={{
          border: `10px solid ${Color(OFF_WHITE)
            .darken(0.7)
            .fade(0.3)
            .toString()}`,
        }}
      >
        <div
          style={{
            minHeight: "calc(100vh - 40px)",
            border: `10px solid ${Color(OFF_WHITE)
              .darken(0.5)
              .fade(0.5)
              .toString()}`,
          }}
        >
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
            <footer>
              {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
