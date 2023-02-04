/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hill Country Soft Water | [todo add tag line]`,
    description: `todo add a better description than A website for Hill Country Soft Water`,
    siteUrl: "https://www.witcraft.io",
    phone: '210-635-7418',
    addressName: 'Hill Country Soft Water',
    addressLine1:'123 Some St.',
    addressCsz: 'Sacramento, CA 95832',
    email: 'info@watersoftenersanantonio.co',
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
