import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import PaginationLinks from "../components/paginationLinks"
import "../styles/layout.css"

const IndexPage = () => {
  const postsPerPage = 3
  let numberOfPages
  return (
    <div>
      <Layout>
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="main-container">
          <div className="main-content">
            <h2>
              Welcome to <span>metarules - blog</span>.
            </h2>
            <p>
              We are on a mission to share & make programming, data skills &
              other interesting resources accessible for learners & beginners
              everywhere.
            </p>
          </div>
        </div>
        <StaticQuery
          query={indexQuery}
          render={data => {
            numberOfPages = Math.ceil(
              data.allMarkdownRemark.totalCount / postsPerPage
            )
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={
                      node.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    tags={node.frontmatter.tags}
                  />
                ))}
                <PaginationLinks
                  currentPage={1}
                  numberOfPages={numberOfPages}
                />
              </div>
            )
          }}
        />
      </Layout>
    </div>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            author
            tags
            image {
              childImageSharp {
                gatsbyImageData(transformOptions: {fit: INSIDE})
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
  }
`

export default IndexPage
