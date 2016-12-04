//import React from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'

const LinkRenderer = ({ to, className, children }) => (
  <Link to={to} className={className} activeClassName="active" >{children}</Link>
)

//todo: may need to configrue security to not show links
const Nav = () => (
  <Menu>
    <Menu.Item name='Home' to="/home" as={LinkRenderer}/>
    <Menu.Item name='About' to="/about" as={LinkRenderer}/>
  </Menu>
)

export default Nav
