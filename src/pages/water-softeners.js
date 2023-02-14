import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { WaterSofteners } from "../components/services/service-pages/water-softeners"

const WaterSoftenersPage = ({ location }) => (
  <Layout location={location}>
    {/* <WaterSofteners /> */}
<div>placeholder WaterSoftenersPage</div>
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default WaterSoftenersPage
