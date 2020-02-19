import { graphql, useStaticQuery } from "gatsby"

interface SiteMeta {
  defaultDescription?: string
  defaultTitle: string
  siteUrl: string
  image?: string
  author?: string
  twitter?: string
}

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          image
          author
          twitter
        }
      }
    }
  `)

  return data.site.siteMetadata as SiteMeta
}

export default useSiteMetadata
