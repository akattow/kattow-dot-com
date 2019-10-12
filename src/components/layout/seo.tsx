import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { string } from "prop-types"

interface ISEO {
  lang?: string
  meta?: []
  pageDescription?: string
  pageTitle: string
}

const SEO: React.FC<ISEO> = ({ pageDescription, lang, meta, pageTitle }) => {
  const { title, description, author } = useSiteMetadata()

  const metaDescription = pageDescription !== "" ? pageDescription : description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  pageDescription: "",
  lang: "en",
  meta: [],
  pageTitle: "",
}

export default SEO
