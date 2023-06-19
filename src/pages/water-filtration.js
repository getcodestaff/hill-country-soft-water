import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service2 } from "../components/services/service-pages/service2"

const WaterFiltrationPage = ({ location }) => (
  <Layout location={location}>
    <Service2 />
  </Layout>
)

export const Head = ({ location }) => {
  const title = "Water Filtration Systems San Antonio, TX | Since 1989"
  const description = "Water Filtration Systems San Antonio, TX | Since 1989"
  return <Seo url={location.href} title={title} description={description} />
}

export default WaterFiltrationPage
