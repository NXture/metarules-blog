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
  Row,
  Col,
} from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/layout.css"

const Sidebar = ({ author, authorFluid }) => {
  return (
    <div style={{ position: "sticky", top: 10 }}>
      {author && (
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: 200,
              alignSelf: "center",
              padding: "5% 10%",
            }}
          >
            <GatsbyImage id="author-img" image={authorFluid} alt="author" />
          </div>
          <CardBody style={{ paddingTop: 0 }}>
            <CardTitle className="text-center text-uppercase mb-3">
              {author.name}
            </CardTitle>
            <CardText>{author.bio}</CardText>
          </CardBody>
        </Card>
      )}
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase">
            <span>ADVERTISEMENT</span>
          </CardTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              title="amazon ads1"
              style={{ width: "130px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=metarulesgats-21&marketplace=amazon&amp;region=IN&placement=9352138325&asins=9352138325&linkId=1ec80329b84915d598224aaac5b05c7a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
            <iframe
              title="amazon ads2"
              style={{ width: "130px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=metarulesgats-21&marketplace=amazon&amp;region=IN&placement=9352134915&asins=9352134915&linkId=0b91ce2f98869423b09bfd42b1d4f0d2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="card-title text-center text-uppercase md-3">
            <span>Recent Posts</span>
          </CardTitle>
          <StaticQuery
            query={sidebarQuery}
            render={data => (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                    <hr style={{ marginTop: 0 }} />
                    <Row>
                      <Col xs="8">
                        <div>
                          <h6>
                            <Link to={node.fields.slug}>
                              {node.frontmatter.title}
                            </Link>
                          </h6>
                          <p style={{ fontSize: "small" }}>
                            <span>{node.frontmatter.author}</span> |{" "}
                            <span>{node.frontmatter.date}</span>
                          </p>
                        </div>
                      </Col>
                      <Col xs="4">
                        <Link to={node.fields.slug}>
                          <GatsbyImage
                            image={
                              node.frontmatter.image.childImageSharp
                                .gatsbyImageData
                            }
                            alt="recent post thumtail"
                          />
                        </Link>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            )}
          />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase md-3">
            <span>Newsletter</span>
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Your Email address"
                disabled
              />
            </FormGroup>
            <button className="btn btn-outline-success text-upercase">
              Subscribe
            </button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
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
