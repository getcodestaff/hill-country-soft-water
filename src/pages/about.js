import React from "react"
import About from "../components/about"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ location }) => {
  return (
    <Layout
      title={"About Water Softeners San Antonio, TX."}
      description={
        "Get to know the water filtration company at Water Softeners San Antonio"
      }
      location={location}
    >
      <About />
    </Layout>
  )
}

export const Head = ({ location }) => {
  const title = "About Water Softener San Antonio, TX "
  const description = "About Water Softener Company Serving San Antonio, TX Since 1989."
  return <Seo url={location.href} title={title} description={description} />
}

export default AboutPage
