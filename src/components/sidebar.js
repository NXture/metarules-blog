import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
} from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"

const Sidebar = ({ author, authorFluid }) => {
  return (
    <div>
      {author && (
        <Card>
          <GatsbyImage className="card-image-top" image={authorFluid} />
          <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
              {author.name}
            </CardTitle>
            <CardText>{author.bio}</CardText>
          </CardBody>
        </Card>
      )}
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase md-3">
            Newsletter
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Your Email address"
              />
            </FormGroup>
            <button className="btn btn-outline-success text-upercase">
              Subscribe
            </button>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase">
            Advertisement
          </CardTitle>
          <img
            src="https://via.placeholder.com/320x200"
            alt="ads"
            style={{ width: "100%" }}
          />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase md-3">
            Recent Posts
          </CardTitle>
          <StaticQuery
            query={sidebarQuery}
            render={data => (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Card key={node.id}>
                    <Link to={node.fields.slug}>
                      <GatsbyImage
                        className="card-image-top"
                        image={
                          node.frontmatter.image.childImageSharp.gatsbyImageData
                        }
                        alt="recent post thumtail"
                      />
                    </Link>
                    <CardBody>
                      <CardTitle>
                        <Link to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                ))}
              </div>
            )}
          />
        </CardBody>
      </Card>
    </div>
  )
}

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
