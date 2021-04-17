import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"
import authors from "../utils/authors"

const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const author = authors.find(x => x.name === pageContext.authorName)
  const pageHeader = `${totalCount} Posts by: ${pageContext.authorName}`

  return (
    <Layout
      pageTitle={pageHeader}
      postAuthor={author}
      authorImage={data.file.childImageSharp.gatsbyImageData}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          body={node.excerpt}
          fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
          tags={node.frontmatter.tags}
        />
      ))}
    </Layout>
  )
}

export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

export default authorPosts
