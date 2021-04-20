import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import "../styles/header.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="navbar-container">
      <div className="top-info" style={{ maxWidth: 700 }}>
        <h6
          style={{
            marginTop: `0.2rem`,
            marginBottom: `0.4rem`,
            color: `white`,
            textShadow: `0.5px 0.5px 10px black`,
            fontSize: `small`,
            fontWeight: `lighter`,
          }}
        >
          Free Online Resources for Beginners and students to learn, understand
          & develop!
        </h6>
      </div>
      <div style={{ margin: `auto`, maxWidth: 900, padding: `0 1rem` }}>
        <Navbar sticky="top" id="cstm-navbar" expand="sm">
          <Navbar.Brand className="brand-name">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-link">
              <Nav.Item>
                <ListLink to="/team">Team</ListLink>
              </Nav.Item>
              <Nav.Item>
                <ListLink to="/tags">Tags</ListLink>
              </Nav.Item>
              <Nav.Item>
                <ListLink to="/about">About</ListLink>
              </Nav.Item>
              <Nav.Item>
                <ListLink to="/submit-a-blog" >Submit</ListLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
