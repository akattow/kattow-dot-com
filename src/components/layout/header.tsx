/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const StyledHeader: React.FC = ({ children }) => (
  <header
    sx={{
      px: [4, 5, 6],
      py: 3,
      display: "flex",
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
  return (
    <StyledHeader>
      <div>
        <Link to="/">hi, I'm kat tow</Link>
      </div>
      <div>
        <Link to="/about">about me</Link>
      </div>
    </StyledHeader>
  )
}

export default Header
