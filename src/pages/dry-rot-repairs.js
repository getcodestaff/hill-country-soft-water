import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { DryRotRepairs } from "../components/services/service-pages/dry-rot-repairs"

const DryRotRepairsPage = ({ location }) => (
  <Layout location={location}>
    <DryRotRepairs />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default DryRotRepairsPage
