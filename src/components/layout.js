import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Sidebar from "./sidebar"
import Header from "./header"
import "../styles/index.scss"
import "../styles/layout.css"

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
        className="cstm-footer"
        style={{
          marginTop: `2rem`,
          backgroundColor: "white",
          paddingLeft: `1%`,
        }}
      >
        metarules © {new Date().getFullYear()}, Built with
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
