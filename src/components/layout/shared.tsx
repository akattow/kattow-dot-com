import styled, { Theme } from "../../utils/theme"
import css from "@emotion/css"

export const setPadding = (theme: Theme) => css`
  padding: 1rem ${theme.gutters.default};
  ${theme.mq.tablet} {
    padding: 1rem ${theme.gutters.tablet};
  }
  ${theme.mq.desktop} {
    padding: 1rem ${theme.gutters.desktop};
  }
  ${theme.mq.xl} {
    padding: 1rem ${theme.gutters.xl};
  }
`

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:last-of-type {
    padding-bottom: 0;
  }
`
