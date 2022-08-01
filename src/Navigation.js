import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'

function Navigation() {
  return (
    <div>
        <About />
        <Projects />
        <Contact />
        <Resume />
    </div>
  )
}

export default Navigation