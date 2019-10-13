import React from "react"
import { setPadding } from "./shared"
import { css } from "@emotion/core"
import { Theme } from "../../utils/theme"

const Footer = () => {
  return (
    <footer
      css={(theme: Theme) => css`
        ${setPadding(theme)};
        font-size: 0.8rem;
      `}
    >
      © {new Date().getFullYear()} | built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
