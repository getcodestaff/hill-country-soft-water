import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service4 } from "../components/services/service-pages/service4"

const DoorsPage = ({ location }) => (
  <Layout location={location}>
    <Service4 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default DoorsPage
