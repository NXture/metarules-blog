import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Sidebar from "./sidebar"
import Header from "./header"
import "../styles/index.scss"

const Layout = ({ authorImage, children, pageTitle, postAuthor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4">
            <Sidebar author={postAuthor} authorFluid={authorImage} />
          </Col>
        </Row>
      </div>
      <footer
        style={{
          marginTop: `2rem`,
          backgroundColor: "white",
          padding: `4% 10% 2% 10%`,
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
      >
        <div  style={{paddingBottom: `5%`}}>
          <h4> <a href="/">metarules-blog</a></h4>
          <p>Thanks for Reading!<span role="img" aria-labelledby="Red Ballon">🎈</span></p>
        </div>
        <span>{data.site.siteMetadata.title}</span> © {new Date().getFullYear()}
        , Built with
        {` `}
        <a href="https://reactjs.org/">ReactJS</a> <span>/</span>{" "}
        <a href="/privacy-policy">Our Privacy Policy</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
