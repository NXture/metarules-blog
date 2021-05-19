import * as React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import "../styles/header.css"
import { StaticImage } from "gatsby-plugin-image"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
  /*const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )*/

  return (
    <div className="navbar-container">
      <div className="top-info" style={{ maxWidth: 700 }}>
        <p
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
        </p>
      </div>
      <div style={{ margin: `auto`, maxWidth: 1000, padding: `0 1rem` }}>
        <Navbar expand="sm">
          <Navbar.Brand style={{ padding: 0 }}>
            <Link to="/">
              {" "}
              <StaticImage
                width={55}
                height={36}
                src="../images/metarules.svg"
                alt="brand logo"
              />{" "}
            </Link>
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
                <ListLink to="/submit-a-blog">Submit</ListLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
