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
    defaultState: 'TX',
    defaultSeoTitle: 'Water Softener San Antonio Since 1989 | Whole House Water Filtration San Antonio, TX',
    defaultSeoDescription: 'Water Softeners in  San Antonio Since 1989. Installation and Service of Water Softener Systems in San Antonio, Texas for 30+ Years. Whole House Water Filtration System San Antonio Texas.',
    cityKeyword: "Water Filtration ${city}, ${state}. Whole House Water Filters in ${city}, ${state}",
    citySlug: "STATE/CITY",
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
          process.env.WPGRAPHQL_URL || `https://watersa.wpengine.com/graphql`,
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
