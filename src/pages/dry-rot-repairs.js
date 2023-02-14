import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service5 } from "../components/services/service-pages/service5"

const DryRotRepairsPage = ({ location }) => (
  <Layout location={location}>
    <Service5 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default DryRotRepairsPage
