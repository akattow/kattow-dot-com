import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../../hooks/useSiteMetadata"

interface ISEO {
  lang?: string
  pageDescription?: string
  pageTitle: string
  image?: string
  pathname?: string
  article?: boolean
}

const SEO: React.FC<ISEO> = ({
  pageDescription,
  lang = "en",
  pageTitle,
  image,
  pathname,
  article,
}) => {
  const siteMeta = useSiteMetadata()

  const seo = {
    title: pageTitle || siteMeta.defaultTitle,
    description: pageDescription || siteMeta.defaultDescription,
    image: `${siteMeta.siteUrl}${image || siteMeta.image}`,
    url: `${siteMeta.siteUrl}${pathname || "/"}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={siteMeta.author}
      titleTemplate={`%s | ${siteMeta.author}`}
      title={seo.title}
    >
      <meta charSet="utf-8" />
      <title>{seo.title}</title>
      <meta property="og:url" content={seo.url} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      {seo.image && <meta name="image" content={seo.image} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {article === true ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}

      {seo.title && <meta property="og:title" content={seo.title} />}

      <meta name="twitter:card" content="summary_large_image" />
      {siteMeta.twitter && (
        <meta name="twitter:creator" content={siteMeta.twitter} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
