import React from 'react'
import About from './About'
import Landing from './Landing'
import Projects from './Projects'
import {Outlet} from 'react-router-dom'
function Home() {
  return (
    <div className='homecontainer'>
      <Landing />
     
    </div>
  )
}

export default Home