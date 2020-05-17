import { graphql, useStaticQuery } from "gatsby"

interface SiteMeta {
  defaultDescription?: string
  defaultTitle: string
  siteUrl: string
  author?: string
  twitter?: string
  codepen?: string
  linkedin?: string
}

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          author
          twitter
          linkedin
          codepen
        }
      }
    }
  `)

  return data.site.siteMetadata as SiteMeta
}

export default useSiteMetadata
