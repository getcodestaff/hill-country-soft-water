import React from "react"
import About from "../components/about"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ location }) => {
  return (
    <Layout
      title={"About Carruth Home Solutions"}
      description={
        "Get to know the Father and Son team at Carruth Home Solutions"
      }
      location={location}
    >
      <About />
    </Layout>
  )
}

export const Head = ({ location }) => {
  const title = "About Carruth Home Solutions"
  const description = "Carruth Home Solutions is a family owned and operated business serving the Sacramento Area."
  return <Seo url={location.href} title={title} description={description} />
}

export default AboutPage
