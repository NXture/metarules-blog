import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import authors from "../utils/authors"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import VarunImage from "../images/varun.jpg"
import { slugify } from "../utils/utilityFunctions"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="md-4">
      <div className="col-md-3">
        <img
          src={VarunImage}
          style={{ maxWidth: "100%" }}
          alt="Varun author profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View Posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
