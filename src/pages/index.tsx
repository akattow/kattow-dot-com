/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import SelfPortrait from "../components/self-portrait"

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

const IndexPage: React.FC = () => (
  <Layout>
    <SEO pageTitle="Home" lang="en" />
    <StyledHero>
      <div
        sx={{
          pt: ["inherit", "inherit", "inherit", "2rem"],
        }}
      >
        <h1>Hi, I'm Kat</h1>
        <p>I'm a front-end developer, UX designer, and illustrator.</p>
        <p>
          This site has a new look coming for 2020, but there are{" "}
          <Link to="/about">other ways</Link> to follow me in the meantime.
        </p>
      </div>

      <ImageWrapper>
        <SelfPortrait />
      </ImageWrapper>
    </StyledHero>
  </Layout>
)

export default IndexPage
