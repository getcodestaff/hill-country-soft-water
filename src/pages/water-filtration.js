import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Service2 } from "../components/services/service-pages/service2"

const Service2Page = ({ location }) => (
  <Layout location={location}>
    {/* <Service2 /> */}
<div>placeholder Service2Page</div>
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default Service2Page
