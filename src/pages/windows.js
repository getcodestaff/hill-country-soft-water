import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service3 } from "../components/services/service-pages/service3"

const WindowsPage = ({ location }) => (
  <Layout location={location}>
    <Service3 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default WindowsPage
