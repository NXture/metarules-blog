import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.scss"
import authors from "../utils/authors"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import VarunImage from "../images/varun.jpg"
import { slugify } from "../utils/utilityFunctions"

const TeamPage = () => (
  <Layout>
    <Seo title="Team" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="main-content">
        <h2>Meet the Team.</h2>
        <p>
          The only way to create great things every day is with great people who
          truly enjoy their work, below are the authors and editors who are
          responsible of the success of this site.
        </p>
        <h3>
          Join Us{" "}
          <span role="img" aria-labelledby="teams Emoji">
            🤝
          </span>
        </h3>
        <p>
          Anyone can write on metarules. Students, Thought-leaders, journalists,
          experts, and individuals with unique perspectives can share their
          thinking here. Be a part of metarules-blog by submitting a blog. <a href="/submit-a-blog"><span>Submissions Guildelines</span></a>
        </p>
        <h3>Our folk</h3>
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
      </div>
    </div>
  </Layout>
)

export default TeamPage
