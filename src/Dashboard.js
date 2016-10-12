import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'



const Home = () => ( <h2>Home</h2> )
const About = () => ( <h2>Aboug</h2> )


const Dashboard = () => (
  <BrowserRouter>
    <div>
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
      <div>This is where the nav is</div>
      <Match exactly pattern="/" component={Home}/>
      <Match exactly pattern="/about" component={About}/>
    </div>
  </BrowserRouter>


)

export default Dashboard
