import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          twitter
          instagram
          codepen
          linkedin
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
