import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Balconies } from "../components/services/service-pages/balconies"

const BalconiesPage = ({ location }) => (
  <Layout location={location}>
    <Balconies />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default BalconiesPage
