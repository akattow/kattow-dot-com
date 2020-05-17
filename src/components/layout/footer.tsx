/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faCodepen,
  faLinkedinIn,
  faDev,
} from "@fortawesome/free-brands-svg-icons"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { ExternalLink } from "../utils"

const StyledFooter: React.FC = ({ children }) => (
  <footer
    sx={{
      px: [3, 4, 5, 6],
      py: 3,
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
      "> *": {
        mt: 0,
        mx: [2, 3, 4, 5],
        "&:first-child": {
          ml: 0,
        },
        "&:last-child": {
          mr: 0,
        },
      },
      a: {
        fontSize: [4],
        mt: 0,
        backgroundImage: `none`,
        "&:hover, &:focus": {
          color: theme => `${theme.colors.primary}`,
          svg: { transform: "scale(1.2)" },
        },
      },
    }}
  >
    {children}
  </footer>
)

const Footer = () => {
  const data = useSiteMetadata()

  const social = [
    {
      target: `https://dev.to/${data.twitter}`,
      label: "follow me on Dev.to",
      icon: faDev,
    },
    {
      target: `https://twitter.com/${data.twitter}`,
      label: "follow me on Twitter",
      icon: faTwitter,
    },
    {
      target: `https://codepen.io/${data.codepen}`,
      label: "see code samples on Codepen",
      icon: faCodepen,
    },
    {
      target: `https://linkedin.com/in/${data.linkedin}`,
      label: "find me on LinkedIn",
      icon: faLinkedinIn,
    },
  ]

  return (
    <StyledFooter>
      <small sx={{ alignSelf: "center" }}>&copy; 2020 Kat Tow</small>
      {social.map(item => (
        <ExternalLink
          target={item.target}
          key={item.target}
          aria-label={item.label}
        >
          <FontAwesomeIcon icon={item.icon} />
        </ExternalLink>
      ))}
    </StyledFooter>
  )
}

export default Footer
