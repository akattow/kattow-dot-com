/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"

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
        slug: string
      }
      body: string
      timeToRead: number
      excerpt: string
    }
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
      timeToRead
      excerpt
    }
  }
`

const PostTemplate: React.FC<MdxBlogPostProps> = ({ data }) => (
  <Layout>
    <SEO
      pageTitle={data.mdx.frontmatter.title}
      pageDescription={data.mdx.excerpt}
      pathname={`/blog/${data.mdx.frontmatter.slug}`}
      article={true}
    />
    <article
      sx={{
        py: 4,
      }}
    >
      <h1>{data.mdx.frontmatter.title}</h1>
      <small>{data.mdx.timeToRead} min read</small>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div>
        <Link to="/blog">&larr; Back to all posts</Link>
      </div>
    </article>
  </Layout>
)

export default PostTemplate
