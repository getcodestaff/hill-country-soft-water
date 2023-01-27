import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Windows } from "../components/services/service-pages/windows"

const WindowsPage = ({ location }) => (
  <Layout location={location}>
    <Windows />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default WindowsPage
