import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service7 } from "../components/services/service-pages/service7"

const HouseWaterFiltersPage = ({ location }) => (
  <Layout location={location}>
    <Service7 />
  </Layout>
)

export const Head = ({ location }) => {
  const title = "Whole House Filtration San Antonio, TX | Since 1989"
  const description = "Whole House Filtration Systems San Antonio, TX. Serving the local residents of San Antonio Since 1989"
  return <Seo url={location.href} title={title} description={description} />
}

export default HouseWaterFiltersPage
