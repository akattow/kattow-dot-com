import React from "react"
import { Global } from "@emotion/core"
import "./utility.css"

const GlobalStyles = () => {
  return (
    <Global
      styles={theme => ({
        "*": {
          boxSizing: `border-box`,
          margin: 0,
          "&:focus": {
            outlineColor: `${theme.colors.secondary}`,
          },
        },
        /* More info: https://bit.ly/2PsCnzk */
        "* + *": {
          marginTop: theme.space[4],
        },
        "html, body": {
          margin: 0,
          color: theme.colors.text,
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes[3],
          lineHeight: theme.lineHeights.body,
          "> div": {
            marginTop: 0,
          },
          "h1, h2, h3, h4, h5, h6": {
            fontFamily: theme.fonts.heading,
            color: theme.colors.secondary,
            lineHeight: theme.lineHeights.heading,
            marginBottom: theme.space[4],
            "+ *": {
              marginTop: theme.space[3],
            },
          },
          h1: {
            fontSize: "2em",
          },
          "h3, h5": {
            color: theme.colors.primary,
          },
          a: {
            color: theme.colors.text,
            textDecoration: `none`,
            backgroundImage: `linear-gradient(${theme.colors.primary}, ${theme.colors.primary})`,
            backgroundSize: `100% .5em`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `left 0 bottom -25%`,
            transition: `200ms`,
            "&:hover, &:focus": {
              outline: `none`,
              backgroundPosition: `100% 100%`,
              backgroundSize: `100% 100%`,
              color: theme.colors.background,
            },
          },
          li: {
            marginTop: theme.space[1],
          },
          code: {
            fontFamily: theme.fonts.monospace,
          },
          "::selection": {
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          },
        },
      })}
    />
  )
}

export default GlobalStyles
