module.exports = {
  siteMetadata: {
    title: `kattow.com`,
    description: `UI developer and accessibility advocate`,
    author: `Kat Tow`,
    twitter: `akattow`,
    linkedin: `kattow`,
    codepen: `kattow`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout/index.tsx"),
        },
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
        plugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speaking`,
        path: `${__dirname}/content/speaking`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kattow-dot-com`,
        short_name: `kattow`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/kat-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
