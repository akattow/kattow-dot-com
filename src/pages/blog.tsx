/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { BlogPost } from "../utils/interfaces"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Section } from "../components/layout/shared"
import useBlog from "../hooks/useBlog"
import { Link } from "gatsby"

const Blog: React.FC = () => {
  const posts: BlogPost[] = useBlog()

  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <Section>
        <h1>blog</h1>
        {posts.map(post => (
          <BlogListing post={post} key={post.slug} />
        ))}
      </Section>
    </Layout>
  )
}

export default Blog

const BlogListing: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article
    sx={{
      "*": {
        marginTop: 0,
        marginBottom: [1],
      },
      marginTop: [5],
    }}
  >
    <Link to={`/blog/${post.slug}`} sx={{ fontSize: [4] }}>
      {post.title}
    </Link>
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "> span": {
          marginTop: 0,
          marginRight: [4],
          "&:last-of-type": {
            marginRight: 0,
          },
        },
      }}
    >
      <span>{post.publishDate}</span>
      <span>{post.timeToRead} min read</span>
    </div>
  </article>
)
