import { graphql, useStaticQuery } from "gatsby"

const MenuQuery = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: { component: { eq: "header" } }) {
      frontmatter {
        menu {
          mainMenu {
            label
            link
          }
          servicesMenu {
            label
            link
          }
        }
      }
    }
  }
  `)
  return data.markdownRemark.frontmatter
}

export default MenuQuery
