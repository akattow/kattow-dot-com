import styled, { CreateStyled } from "@emotion/styled"
import css from "@emotion/css"

export const theme: Theme = {
  fontImport:
    "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Nunito:400,700&display=swap');",
  header:
    "'Montserrat', 'Lucida Sans Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', sans-serif",
  body:
    "'Nunito', 'Lucida Sans Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', sans-serif",
  code: "'Fira Code', 'Inconsolata', 'Consolas', monospace",
  text: "#524D5D",
  primary: "#007A75",
  secondary: "#1B0458",
  tertiary: "#89BD00",

  mq: {
    mobile: `@media (min-width: 400px)`,
    phablet: `@media (min-width: 550px)`,
    tablet: `@media (min-width: 750px)`,
    desktop: `@media (min-width: 1000px)`,
    xl: `@media (min-width: 1200px)`,
    xxl: `@media (min-width: 1600px)`,
  },

  gutters: {
    default: `2rem`,
    tablet: `5rem`,
    desktop: `8rem`,
    xl: `10rem`,
  },

  animation: {
    curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
    curveExpo: `cubic-bezier(.17, .67, .83, .67)`,
    speedDefault: `200ms`,
    speedFast: `100ms`,
    speedSlow: `350ms`,
  },
}

export default styled as CreateStyled<Theme>

export type Theme = {
  fontImport: string
  header: string
  body: string
  code: string
  text: string
  primary: string
  secondary: string
  tertiary: string
  mq: {
    mobile: string
    phablet: string
    tablet: string
    desktop: string
    xl: string
    xxl: string
  }
  gutters: {
    default: string
    tablet: string
    desktop: string
    xl: string
  }
  animation: {
    curveDefault: string
    curveExpo: string
    speedDefault: string
    speedFast: string
    speedSlow: string
  }
}
