import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service8 } from "../components/services/service-pages/service8"

const HouseWaterFiltersPage = ({ location }) => (
  <Layout location={location}>
    <Service8 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default HouseWaterFiltersPage
