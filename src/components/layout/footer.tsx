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
      fontSize: [4],
      px: [3, 4, 5, 6],
      py: 3,
      "> *": {
        mx: [2, 3, 4, 5],
        "&:first-of-type": {
          ml: 0,
        },
        "&:last-of-type": {
          mr: 0,
        },
      },
      a: {
        mt: 0,
        backgroundSize: `100% 0`,
        "&:hover, &:focus": {
          color: theme => `${theme.colors.primary}`,
          backgroundSize: 0,
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
      icon: faDev,
    },
    {
      target: `https://twitter.com/${data.twitter}`,
      icon: faTwitter,
    },
    {
      target: `https://codepen.io/${data.codepen}`,
      icon: faCodepen,
    },
    {
      target: `https://linkedin.com/in/${data.linkedin}`,
      icon: faLinkedinIn,
    },
  ]

  return (
    <StyledFooter>
      {social.map(item => (
        <ExternalLink target={item.target} key={item.target}>
          <FontAwesomeIcon icon={item.icon} />
        </ExternalLink>
      ))}
    </StyledFooter>
  )
}

export default Footer
