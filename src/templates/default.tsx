/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"

const DefaultTemplate: React.FC<{ pageContext: any }> = ({
  pageContext,
  children,
}) => (
  <Layout>
    <SEO
      pageTitle={pageContext.frontmatter.title}
      pageDescription={pageContext.excerpt}
    />
    <section
      sx={{
        py: 4,
      }}
    >
      <h1>{pageContext.frontmatter.title}</h1>
      {children}
    </section>
  </Layout>
)

export default DefaultTemplate
