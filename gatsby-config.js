/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `San Antonio Water Softerner Experts | Hill Country Soft Water`,
    description: `todo add a better description than A website for Hill Country Soft Water`,
    siteUrl: "https://watersoftenersanantonio.co",
    phone: "210-635-7418",
    businessName: "Hill Country Soft Water",
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
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        extensions: [`csv`],
        delimiter: "\t",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-postcss",
  ],
}
