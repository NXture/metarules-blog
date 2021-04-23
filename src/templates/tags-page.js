import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../utils/utilityFunctions"
import "../styles/layout.css"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <Seo title="All tags" keywords={["tags", "topics"]} />
      <div className="main-container">
        <div className="main-content">
          <h2>Tags - List <span role="img" aria-labelledby="tag">📌</span></h2>
          <p>Below are the tags used in this blogging site.</p>
          <ul className="tags-section">
            {tags.map(tag => (
              <li key={tag} style={{ marginBottom: "10px" }}>
                <Button color="primary" href={`/tag/${slugify(tag)}`}>
                  {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                </Button>
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </Layout>
  )
}

export default tagsPage
