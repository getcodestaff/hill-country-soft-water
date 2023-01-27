import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Doors } from "../components/services/service-pages/doors"

const DoorsPage = ({ location }) => (
  <Layout location={location}>
    <Doors />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default DoorsPage
