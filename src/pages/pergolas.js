import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service7 } from "../components/services/service-pages/service7"

const PergolasPage = ({ location }) => (
  <Layout location={location}>
    <Service7 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default PergolasPage
