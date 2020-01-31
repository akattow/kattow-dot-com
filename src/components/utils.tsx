import React from "react"

export const ExternalLink: React.FC<{ target: string }> = ({
  target,
  children,
}) => (
  <a href={target} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)
