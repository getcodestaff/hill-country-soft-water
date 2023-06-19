import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service1 } from "../components/services/service-pages/service1"

const WaterSoftenersPage = ({ location }) => (
  <Layout location={location}>
    <Service1 />
  </Layout>
)

export const Head = ({ location }) => {
  const title = "Water Softener Systems San Antonio, TX | Since 1989"
  const description = "Water Softener Systems San Antonio, TX | Since 1989"
  return <Seo url={location.href} title={title} description={description} />
}

export default WaterSoftenersPage
