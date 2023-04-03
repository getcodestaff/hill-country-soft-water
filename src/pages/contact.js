import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Contact } from "../components/contact"

const title = "Contact Carruth Home Solutions"
const description = "A form for contacting Carruth Home Solutions"

const ContactPage = ({ location }) => {
  return (
    <Layout title={title} description={description} location={location}>
      <Contact />
    </Layout>
  )
}

export const Head = ({ location }) => {
  return <Seo url={location.href} title={title} description={description} />
}

export default ContactPage
