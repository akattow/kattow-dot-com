/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const SkipNavLink: React.FC = () => (
  <div sx={{ position: "fixed", top: 0, padding: 2 }}>
    <a className="visually-hidden" href="#main-content" sx={{}}>
      Skip to content
    </a>
  </div>
)

export default SkipNavLink
