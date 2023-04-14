/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `San Antonio Water Softerner Experts | Hill Country Soft Water`,
    description: `todo add a better description than A website for Hill Country Soft Water`,
    siteUrl: "https://watersoftenersanantonio.co",
    phone: "210-942-7683",
    businessName: "Hill Country Soft Water",
    defaultCity: "San Antonio",
    author: `@witcradg`,
  },
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL || `https://d8gblog.wpengine.com/graphql`,
        auth: {
          htaccess: {
            username: "demo",
            password: "password",
          },
        },
      },
    },
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
            extensions: [ `tsv` ],
            delimiter: '\t'
        }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`
  ],
}
