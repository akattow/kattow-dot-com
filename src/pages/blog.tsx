/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { BlogPost } from "../utils/interfaces"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import useBlog from "../hooks/useBlog"
import { Link } from "gatsby"
import { Section, SecretUl, ContentDetail } from "../components/utils"

const sortPosts = (posts: BlogPost[]) => {
  return posts.sort((a, b) => {
    if (Date.parse(a.publishDate) < Date.parse(b.publishDate)) return 1
    if (Date.parse(a.publishDate) > Date.parse(b.publishDate)) return -1
    return 0
  })
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = useBlog()

  return (
    <Layout>
      <SEO pageTitle="Blog" pathname="/blog" />
      <Section>
        <h1>blog</h1>
        <SecretUl>
        {sortPosts(posts).map(post => (
          <BlogListing post={post} key={post.slug} />
        ))}
        </SecretUl>
      </Section>
    </Layout>
  )
}

export default Blog

const BlogListing: React.FC<{ post: BlogPost }> = ({ post }) => (
  <li
    sx={{
      "> *": {
        marginTop: 0,
      },
      marginBottom: [4],
    }}
  >
    <strong>
      <Link to={`/blog/${post.slug}`}>
        {post.title}
      </Link>
    </strong>
    <div>
      <ContentDetail>{post.publishDate}</ContentDetail>
      <ContentDetail>{post.timeToRead} min read</ContentDetail>
    </div>
  </li>
)
