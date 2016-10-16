import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import Nav from 'component/Nav'

const Home = () => ( <h2>Home</h2> )
const About = () => ( <h2>Aboug</h2> )


const Dashboard = () => (
  <BrowserRouter>
    <div>
      <Nav/>
      <div>This is where the nav is</div>
      <Match exactly pattern="/" component={Home}/>
      <Match exactly pattern="/about" component={About}/>
    </div>
  </BrowserRouter>


)

export default Dashboard
