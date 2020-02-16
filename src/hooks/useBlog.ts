import { graphql, useStaticQuery } from "gatsby"

const useBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { draft: { eq: false } } }) {
        nodes {
          frontmatter {
            title
            slug
            publishDate(formatString: "MMM DD, YYYY")
            draft
          }
          timeToRead
        }
      }
    }
  `)

  return data.allMdx.nodes.map((post: any) => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    publishDate: post.frontmatter.publishDate,
    draft: post.frontmatter.draft,
    timeToRead: post.timeToRead,
  }))
}

export default useBlog
