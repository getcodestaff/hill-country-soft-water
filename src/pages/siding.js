import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service6 } from "../components/services/service-pages/service6"

const SidingPage = ({ location }) => (
  <Layout location={location}>
    <Service6 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default SidingPage
