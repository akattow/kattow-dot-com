import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SelfPortrait = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "kat-illo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} alt="kat tow" />
}

export default SelfPortrait
