/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Section } from "../components/layout/shared"

interface MdxBlogPostProps {
  pathContext: {
    slug: string
  }
  pageContext: {
    slug: string
  }
  data: {
    mdx: {
      frontmatter: {
        title: string
      }
      body: string
      timeToRead: number
    }
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
      timeToRead
    }
  }
`

const PostTemplate: React.FC<MdxBlogPostProps> = ({ data }) => (
  <Layout>
    <SEO pageTitle={data.mdx.frontmatter.title} />
    <Section>
      <h1>{data.mdx.frontmatter.title}</h1>
      <small>{data.mdx.timeToRead} min read</small>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div>
        <Link to="/blog">&larr; Back to all posts</Link>
      </div>
    </Section>
  </Layout>
)

export default PostTemplate
