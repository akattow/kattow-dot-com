/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { ExternalLink } from "../utils"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const StyledHeader: React.FC = ({ children }) => (
  <header
    sx={{
      px: [3, 4, 5, 6],
      py: 3,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      "> *": {
        mt: 0,
      },
    }}
  >
    {children}
  </header>
)

const Header: React.FC = () => {
  const data = useSiteMetadata()
  return (
    <StyledHeader>
      <Link to="/" sx={{ mr: [4] }}>
        hi, I'm kat tow
      </Link>
      <nav
        sx={{
          display: "flex",
          flexWrap: "wrap",
          a: {
            mt: 0,
            mr: [4],
            "&:last-of-type": {
              mr: 0,
            },
          },
        }}
      >
        <Link to="/about">about me</Link>
        <Link to="/speaking">speaking</Link>
        <Link to="/blog">blog</Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
