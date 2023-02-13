const path = require(`path`)

const limit = process.env.AREAS || 999999

console.log("Service Areas pages limit is", limit)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createSlice } = actions
  const serviceAreasTemplate = path.resolve(`src/templates/service-areas.js`)

  const result = await graphql(`
    query myQuery {
      allServiceAreasCsv {
        nodes {
          city_varchar_25
          county_varchar_21
          id
          lat_decimal_10_6
          long_decimal_10_6
          state_varchar_20
          stateshort_varchar_2
          zip_varchar_5
        }
      }
    }
  `)

  result.data.allServiceAreasCsv.nodes.every((node, index) => {
    if (index > limit) return false

    const usState = node.state_varchar_20.toLowerCase()
    const usCity = node.city_varchar_25.toLowerCase()
    let slug = `serving/${usState}/${usCity}/`.replace(/ /g, "-")
    createPage({
      path: slug,
      component: serviceAreasTemplate,
      context: {
        props: node,
      },
    })

    return true
  })
}
