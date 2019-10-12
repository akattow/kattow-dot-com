import { Link } from "gatsby"
import React from "react"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/theme"
import css from "@emotion/css"
import styled from "../../utils/theme"
import { setPadding } from "./shared"

const StyledHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  > * {
    margin-top: 0;
  }
`

const Header: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <StyledHeader css={setPadding}>
      <div>
        <Link
          to="/"
          css={css`
            background-position: left 0 bottom -40%;
            text-transform: lowercase;
          `}
        >
          hi, I'm Kat Tow
        </Link>
      </div>
      <div>
        <Link to="/about">about me</Link>
      </div>
    </StyledHeader>
  )
}

export default Header
