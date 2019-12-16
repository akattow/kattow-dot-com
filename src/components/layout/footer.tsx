/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const StyledFooter: React.FC = ({ children }) => (
  <footer
    sx={{
      px: [4, 5, 6],
      py: 3,
      fontSize: 1,
      "> *": {
        mx: 2,
        "&:first-child": {
          ml: 0,
        },
      },
      a: {
        backgroundSize: `100% 0`,
        "&:hover, &:focus": {
          color: theme => `${theme.colors.primary}`,
          backgroundSize: `100% .25em`,
        },
      },
    }}
  >
    {children}
  </footer>
)

const Footer = () => {
  const data = useSiteMetadata()

  return (
    <StyledFooter>
      <a href={`https://instagram.com/${data.instagram}`}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href={`https://twitter.com/${data.twitter}`}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href={`https://twitter.com/${data.codepen}`}>
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <a href={`https://twitter.com/${data.linkedin}`}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </StyledFooter>
  )
}

export default Footer
