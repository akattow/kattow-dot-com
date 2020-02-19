/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { Section } from "../components/layout/shared"

const About: React.FC = () => {
  const data = useSiteMetadata()

  return (
    <Layout>
      <SEO pageTitle="About" pathname="/about" />
      <Section>
        <h1>about me</h1>
        <p>
          I’m a web developer in Milwaukee, WI. I'm passionate about web
          accessibility. I like building things with React. I enjoy vanilla CSS,
          Sass, and CSS-in-JS (
          <span role="img" aria-label="styled components">
            💅
          </span>{" "}
          and/or{" "}
          <span role="img" aria-label="Emotion">
            👩‍🎤
          </span>
          ).
        </p>
        <p>
          Find me <a href={`https://twitter.com/${data.twitter}`}>on Twitter</a>{" "}
          for more about a11y and how great dogs are.
        </p>
      </Section>
      <Section>
        <h2>important details</h2>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1f", "1fr", "1fr", "1fr 1fr"],
            "> *": {
              mt: 0,
            },
            gridGap: 4,
          }}
        >
          <div>
            <h3>favorite shows</h3>
            <ul>
              <li>Steven Universe</li>
              <li>She-Ra and the Princesses of Power</li>
              <li>The Good Place</li>
            </ul>
          </div>

          <div>
            <h3>favorite board games</h3>
            <ul>
              <li>Root</li>
              <li>Bargain Quest</li>
              <li>Wingspan</li>
            </ul>
          </div>

          <div>
            <h3>favorite foods</h3>
            <ul>
              <li>Pizza</li>
              <li>Dirty chai</li>
              <li>Cream cheese rangoons</li>
            </ul>
          </div>

          <div>
            <h3>ask me about</h3>
            <ul>
              <li>Being an all-state mime</li>
              <li>Living in Japan</li>
              <li>My pug, Mochi</li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default About
