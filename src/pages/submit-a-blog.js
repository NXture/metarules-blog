import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UploadForm from "../components/uploadForm"
import "../styles/index.scss"

const SubmitBlog = () => (
  <Layout>
    <Seo
      title="Submit a Blog"
      keywords={[
        `submit`,
        `metarules`,
        `blog`,
        `metarules.tech`,
        `data science`,
        `technology`,
        `statistics`,
        `gatsby`,
        `application`,
        `react`,
        `AI`,
        `learning`,
      ]}
    />
    <div className="main-container">
      <div className="main-content submit-blog">
        <h2>
          Submit a blog to <span>metarules</span>.
          <span role="img" aria-labelledby="writting emoji">
            ✍
          </span>
        </h2>
        <h3>Submissions Guidelines</h3>
        <hr style={{ minWidth: `80%` }} />
        <h3>Guest Blogs</h3>
        <p>
          We write about AI, Big Data, Data Science, and Machine Learning,
          Statistics, Web Development ( both: Front-end & Back-end), and on many
          interesting topics and are looking for a few high quality blogs to
          bring to our readers.
        </p>
        <p>
          Our readers are mainly Data Scientists, Data Analysts, Machine
          Learning Engineers, Data Engineers, their managers and directors,
          consultants, students and researchers who want to improve their skills
          and knowledge.
        </p>
        <p>
          We prefer original submissions, but will also consider blogs published
          elsewhere.
        </p>
        <p>
          We accept all submissions, with preference given to most interesting,
          original, and technically sound blogs, which have insightful
          takeaways, supported by references and visually appealing images /
          charts / data visualizations.
        </p>
        <p>
          See recent blogs and examples at{" "}
          <span>
            <a href="/">Recent Posts</a>
          </span>
        </p>
        <p>
          Please email relevant submissions - to{" "}
          <span>
            <a href="/submit-a-blog">metarules@gmail.com</a>
          </span>{" "}
          and follow submission guidelines below.
        </p>
        <h3>Submission guidelines</h3>
        <ol>
          <li>Put guest blog: your blog title in the subject line.</li>
          <li>
            Send either a link to already published blog, or an original blog in
            Microsoft Word, Markdown or HTML. HTML should not have javascript or
            embedded images (data:image).
          </li>
          <li>
            A typical guest blog should be 300 to 1200 words (longer blogs can
            be considered if especially interesting). We suggest including 2-3
            interesting images up to 700x500 pixels. We do not recommend larger
            images since they slow down the page loading.
          </li>
          <li>
            Include a suggested summary (~ 2-3 lines, up to 200 characters
            including spaces)
          </li>
          <li>
            Include 4-5 suggested Tags{" "}
            <span>
              <a href="/tags">(see current metarules tags)</a>
            </span>
            .
          </li>
          <li>
            Include a brief author bio and author URL: your Twitter, Facebook,
            or LinkedIn page that you want linked to your author name.
          </li>
          <li>
            We expect an opinion to be supported by facts, links, and
            references. A submission with at least 3 external supporting links
            or references will be appreciated. Links in author bio or to the
            author company do not count.
          </li>
          <span style={{ color: "red" }}>
            (Note: Please make sure your document is below 2Mb)
          </span>
        </ol>
        <h3>For Code</h3>
        <p>
          Use{" "}
          <span>
            <a href="https://gist.github.com/">Github gists</a>
          </span>{" "}
          for code hosting, and include the gist URL in your submission where
          appropriate, and we can embed the code in your post.
        </p>
        <hr style={{ minWidth: "80%" }} />
        <p>
          <span>metarules-blog</span> reserves the right to edit all submissions
          for length and to correct errors/typos.
        </p>
        <p>
          We may modify the titles of selected articles, in consultation with
          authors, to improve their appeal to <span>metarules</span> readers.
        </p>
        <UploadForm />
      </div>
    </div>
  </Layout>
)

export default SubmitBlog
