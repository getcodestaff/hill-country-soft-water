/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hill Country Soft Water | Serving The Greater San Antonio Area`,
    description: `todo add a better description than A website for Hill Country Soft Water`,
    siteUrl: "https://watersoftenersanantonio.co/",
    phone: '210-635-7418',
    businessName: 'Hill Country Soft Water',
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
