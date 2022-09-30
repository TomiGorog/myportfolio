import React from 'react'
import ProjectStyles from './CSS-modules/ProjectStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { IoMdOpen } from 'react-icons/io'
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className={ProjectStyles.ProjectRnnR}>
        <h2 className={ProjectStyles.Title}>RnnR</h2>
        <p className={ProjectStyles.KeySentence}>Community-based delivery application</p>
        <Link to="rnnr" className={ProjectStyles.LinktoProject}>Project Details</Link>
        <h3 className={ProjectStyles.TechStack}>React, JS, HTML, CSS, Google Maps Api, QR, REST, Firebase, git</h3>
        <div className={ProjectStyles.BottomLine}>
          <a href="https://github.com/TomiGorog" target="_blank"><DiGithubBadge className={ProjectStyles.Icons} /></a>
          <a href='https://rnnr.vercel.app/' target="_blank"><IoMdOpen className={ProjectStyles.Icons} /></a>
        </div>
      </div>
    </div>
  )
}

export default Projects