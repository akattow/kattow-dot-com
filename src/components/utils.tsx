/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

export const ExternalLink: React.FC<{ target: string }> = ({
  target,
  children,
}) => (
  <a href={target} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export const SecretUl: React.FC = ({ children }) => (
  <ul
    sx={{
      listStyle: "none",
      paddingInlineStart: 0,
    }}
  >
    {children}
  </ul>
)

export const ContentDetail: React.FC = ({ children }) => (
  <span
    sx={{
      minWidth: "20%",
      mr: 4,
      fontSize: 2,
    }}
  >
    {children}
  </span>
)

export const Section: React.FC = ({ children }) => (
  <section
    sx={{
      py: 4,
    }}
  >
    {children}
  </section>
)
