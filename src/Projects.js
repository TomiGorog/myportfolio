import React from 'react'
import ProjectStyles from './CSS-modules/ProjectStyles.module.css'
import { DiGithubBadge } from "react-icons/di";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className={ProjectStyles.Project}>
        <h2>RnnR</h2>
        <p>Community-based delivery application</p>
        <a href="https://github.com/TomiGorog" target="_blank"><DiGithubBadge className={ProjectStyles.Icons} /></a>
        <a href='#'>Live webapp</a>
        <h4>Project Details</h4>
        <h3>React, JS, HTML, CSS, Google Maps Api, QR, Firebase, git</h3>
      </div>
    </div>
  )
}

export default Projects