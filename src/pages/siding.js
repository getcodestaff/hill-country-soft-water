import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Siding } from "../components/services/service-pages/siding"

const SidingPage = ({ location }) => (
  <Layout location={location}>
    <Siding />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default SidingPage
