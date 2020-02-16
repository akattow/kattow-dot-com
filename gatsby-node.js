exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(
        filter: {
          frontmatter: { draft: { eq: false } }
          fileAbsolutePath: { regex: "/blog/" }
        }
      ) {
        nodes {
          frontmatter {
            slug
            draft
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
