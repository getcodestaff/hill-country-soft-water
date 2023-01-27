/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Service Starter | A template for service oriented business websites`,
    description: `A quick start on creating service oriented websites`,
    siteUrl: "https://www.witcraft.io",
    author: `@witcradg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content-markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-postcss"   
  ],
}
