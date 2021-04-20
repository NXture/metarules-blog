import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div className="main-container">
      <div className="main-content">
        <h2>
          About <span>metarules</span>.
        </h2>
        <p>
          <span>metarules</span> is a blogging site on AI, Analytics, Big Data,
          Data Science, Machine Learning and related topics developed and is
          edited by <span>Varun SriVathsa </span>and team.
        </p>
        <p>
          We are on a mission to share & make programming, data skills & other
          interesting resources accessible for learners & beginners everywhere.
        </p>
        <h3>Our Philosophy</h3>
        <p>
          Most public education focuses on top-down curriculum — especially
          lectures and assessments. For some people, the structure and stability
          of public education works well. But for few people, the pattern of
          "memorize-regurgitate-repeat" is boring and de-motivating.
        </p>
        <p>
          On the other end of the spectrum, self-taught learners are often
          highly driven, because they've found a project or topic that deeply
          motivates them. But self-taught learning lack structure, so
          self-taught learners often get stuck and find themselves wondering,
          "What should I learn next?" or "Is this what I need to be learning to
          achieve my goal?"
        </p>
        <h5>
          At <span>metarules-blog</span> we strive to combine the best of both
          worlds by providing a stepping-stone and online resources to help
          beginners get started.
        </h5>
      </div>
    </div>
  </Layout>
)

export default AboutPage
