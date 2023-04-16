import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export const AllServiceAreas = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        allServiceAreasTsv {
          nodes {
            city_varchar_25
            state_varchar_20
            stateshort_varchar_2
          }
        }
      }
    `
  )
  const areas = queryResult.allServiceAreasTsv.nodes

  return (
    <div id="all-service-areas debug-red">
      <section id="service-areas" className="bg-white">
        <div className="mx-6 lg:mx-20 mb-4">
          <h4 className="font-bold mb-2 text-center">Service Areas</h4>
          <div className="columns-2 lg:columns-5">
            {areas.map(elem => {
              const to = `/${elem.state_varchar_20}/${elem.city_varchar_25}`
                .replace(/ /g, "-")
                .toLowerCase()

              return (
                <Link key={elem.city_varchar_25} to={to}>
                  <div className="whitespace-no-wrap text-base">
                    {elem.city_varchar_25}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
