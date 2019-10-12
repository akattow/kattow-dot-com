import React from "react"

import useSiteMetadata from "../hooks/useSiteMetadata"

const Contact = () => {
  const data = useSiteMetadata()
  return (
    <ul>
      <li>
        <a href={`https://twitter.com/${data.twitter}`}>on Twitter</a>
      </li>
      <li>
        <a href={`https://instagram.com/${data.instagram}`}>on Instagram</a>
      </li>
    </ul>
  )
}

export default Contact
