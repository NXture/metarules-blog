import * as React from "react"
import { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

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
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar fixed="top" color="light" light expand="sm">
        <div className="container">
          <NavbarBrand>
            <ListLink to="/">{data.site.siteMetadata.title}</ListLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <ListLink to="/team">Teams</ListLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <ListLink to="/tags">Tags</ListLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <ListLink to="/about">About</ListLink>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
