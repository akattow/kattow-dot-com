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
