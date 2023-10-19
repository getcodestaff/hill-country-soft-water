import { graphql, useStaticQuery } from "gatsby"

const MetadataQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          phone
          businessName
          defaultCity
          defaultState
          defaultSeoTitle
          defaultSeoDescription
          cityKeyword
        }
      }
    }
  `)
  return data
}

export default MetadataQuery
