import React from 'react'
import { Link } from 'react-router'
const Nav = () => (
  <ul>
    <li>
      <Link to ="/" >Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
)

export default Nav
