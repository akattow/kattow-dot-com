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
      <div sx={{ mr: [4] }}>
        <Link to="/">hi, I'm kat tow</Link>
      </div>
      <nav
        sx={{
          a: {
            mr: [4],
            "&:last-of-type": {
              mr: 0,
            },
          },
        }}
      >
        <Link to="/about">about me</Link>
        <Link to="/speaking">speaking</Link>
        <ExternalLink target={`https://dev.to/${data.twitter}`}>
          blog
        </ExternalLink>
      </nav>
    </StyledHeader>
  )
}

export default Header
