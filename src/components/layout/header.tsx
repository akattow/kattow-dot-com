/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const Header: React.FC = () => (
  <StyledHeader>
    <Link to="/" sx={{ mr: [4] }}>
      hi, I'm kat tow
    </Link>
    <Nav>
      <Link to="/about" activeClassName="active">
        about me
      </Link>
      <Link to="/speaking" activeClassName="active">
        speaking
      </Link>
      <Link to="/blog" activeClassName="active">
        blog
      </Link>
    </Nav>
  </StyledHeader>
)

export default Header

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
      a: {
        backgroundSize: "100% .5em",
      },
    }}
  >
    {children}
  </header>
)

const Nav: React.FC = ({ children }) => (
  <nav
    sx={{
      display: "flex",
      flexWrap: "wrap",
      "> *": {
        mt: 0,
        mr: [4],
        "&:last-of-type": {
          mr: 0,
        },
      },
      ".active": {
        backgroundImage: theme =>
          `linear-gradient(${theme.colors.secondary}, ${theme.colors.secondary})`,
        backgroundSize: "100% .6em",
        "&:hover, &:focus": {
          backgroundSize: "100% 100%",
        },
      },
    }}
  >
    {children}
  </nav>
)
