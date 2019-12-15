/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"

const StyledFooter: React.FC = ({ children }) => (
  <footer
    sx={{
      px: [4, 5, 6],
      py: 3,
      fontSize: 0,
    }}
  >
    {children}
  </footer>
)

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} | built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        Gatsby
      </a>
    </StyledFooter>
  )
}

export default Footer
