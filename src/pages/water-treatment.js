import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service6 } from "../components/services/service-pages/service6"

const WaterTreatmentPage = ({ location }) => (
  <Layout location={location}>
    <Service6 />
  </Layout>
)

export const Head = ({ location }) => {
  const title = "Water Treatment Systems San Antonio, TX | Since 1989"
  const description = "Water Treatment Systems San Antonio, TX | Since 1989"
  return <Seo url={location.href} title={title} description={description} />
}

export default WaterTreatmentPage
