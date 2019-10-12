import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import SelfPortrait from "../components/self-portrait"
import css from "@emotion/css"
import { Section } from "../components/layout/shared"
import { Theme } from "../utils/theme"

const IndexPage = () => (
  <Layout>
    <SEO pageTitle="Home" />
    <Section
      css={(theme: Theme) => css`
        padding-top: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 2rem;
        ${theme.mq.desktop} {
          grid-template-columns: 2fr minmax(300px, 1fr);
        }
      `}
    >
      <div
        css={(theme: Theme) => css`
          ${theme.mq.desktop} {
            padding-top: 2rem;
          }
        `}
      >
        <h1>Hi, I'm Kat</h1>
        <p>I'm a front-end developer, UX designer, and illustrator.</p>
        <p>
          This site has a new look coming for 2020, but there are{" "}
          <Link to="/about">other ways</Link> to follow me in the meantime.
        </p>
      </div>

      <div
        css={(theme: Theme) => css`
          margin: 2rem auto 0;
          max-width: 300px;
          width: 100%;
          ${theme.mq.desktop} {
            margin-top: 0;
          }
          * {
            margin-top: 0;
          }
        `}
      >
        <SelfPortrait />
      </div>
    </Section>
  </Layout>
)

export default IndexPage
