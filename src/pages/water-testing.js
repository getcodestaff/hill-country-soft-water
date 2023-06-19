import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service5 } from "../components/services/service-pages/service5"

const WaterTestingPage = ({ location }) => (
  <Layout location={location}>
    <Service5 />
  </Layout>
)

export const Head = ({ location }) => {
  const title = "Water Testing San Antonio, TX | Since 1989"
  const description = "Residential Water Testing in San Antonio, TX Since 1989."
  return <Seo url={location.href} title={title} description={description} />
}

export default WaterTestingPage
