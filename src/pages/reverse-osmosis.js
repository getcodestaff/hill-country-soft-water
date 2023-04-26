import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service3 } from "../components/services/service-pages/service3"

const ReverseOsmosisPage = ({ location }) => (
  <Layout location={location}>
    <Service3 />
  </Layout>
)

export const Head = ({ location }) => {
    const title = "Reverse Osmosis Systems San Antonio, TX | Since 1989"
    const description = "Reverse Osmosis Systems San Antonio, TX | Since 1989"
    return <Seo url={location.href} title={title} description={description} />
  }

export default ReverseOsmosisPage
