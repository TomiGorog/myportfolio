import React from 'react'
import ProjectStyles from './CSS-modules/ProjectStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { IoMdOpen } from 'react-icons/io'
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div id={ProjectStyles.ProjectRnnR} className={ProjectStyles.ProjectTemplate}>
        <h2 className={ProjectStyles.Title}>RnnR</h2>
        <p className={ProjectStyles.KeySentence}>Community-based delivery application</p>
        <Link to="rnnr" className={ProjectStyles.LinktoProject}>Project Details</Link>
        <h3 className={ProjectStyles.TechStack}>React, JS, HTML, CSS, Google Maps Api, QR, REST, Firebase, git</h3>
        <div className={ProjectStyles.BottomLine}>
          <a href="https://github.com/TomiGorog/rnnr" target="_blank"><DiGithubBadge className={ProjectStyles.Icons} /></a>
          <a href='https://rnnr.vercel.app/' target="_blank"><IoMdOpen className={ProjectStyles.Icons} /></a>
        </div>
      </div>
      <div id={ProjectStyles.ProjectTodolist} className={ProjectStyles.ProjectTemplate} >
        <h2 className={ProjectStyles.Title}>Daily todolist</h2>
        <p className={ProjectStyles.KeySentence}>Single page list webapp to manage your daily tasks</p>
        <Link to="todolist" className={ProjectStyles.LinktoProject}>Project Details</Link>
        <h3 className={ProjectStyles.TechStack}>React, JS, HTML, CSS, git, Styled components</h3>
        <div className={ProjectStyles.BottomLine}>
          <a href="https://github.com/TomiGorog/todolist" target="_blank"><DiGithubBadge className={ProjectStyles.Icons} /></a>
          <a href='https://todolist-tomigorog.vercel.app/' target="_blank"><IoMdOpen className={ProjectStyles.Icons} /></a>
        </div>
      </div>
    </div>
  )
}

export default Projects