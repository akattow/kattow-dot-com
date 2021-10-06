/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import SelfPortrait from "../components/self-portrait"
import { ExternalLink } from "../components/utils"
import { Link } from "gatsby"

const StyledHero: React.FC = ({ children }) => (
  <div
    sx={{
      pt: 0,
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "1fr", "2fr minmax(300px, 1fr)"],
      gridGap: "2rem",
    }}
  >
    {children}
  </div>
)

const ImageWrapper: React.FC = ({ children }) => (
  <div
    sx={{
      margin: "2rem auto 0",
      maxWidth: "300px",
      width: "100%",
      mt: ["inherit", "inherit", "inherit", 0],
      "*": {
        mt: 0,
      },
    }}
  >
    {children}
  </div>
)

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO pageTitle="Home" />
      <StyledHero>
        <div
          sx={{
            pt: ["inherit", "inherit", "inherit", "2rem"],
          }}
        >
          <h1>Hi, I'm Kat</h1>
          <p>I'm a web developer in Milwaukee, WI.</p>
          <p>
            I like to <Link to="/blog">write</Link> and{" "}
            <Link to="/speaking">speak</Link> about frontend web development.
          </p>
        </div>

        <ImageWrapper>
          <SelfPortrait />
        </ImageWrapper>
      </StyledHero>
    </Layout>
  )
}

export default IndexPage
