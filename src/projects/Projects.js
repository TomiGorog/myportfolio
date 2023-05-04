import React from 'react'
import ProjectStyles from '../CSS-modules/ProjectStyles.module.css'
import ProjectPreview from './ProjectPreview';
function Projects() {

  const rnnRProject = {
    id: ProjectStyles.ProjectRnnR,
    title: "RnnR",
    keySentence: "Community-based delivery webapplication",
    techStack: "React, JS, HTML, CSS, Google Maps Api, QR, REST, Firebase, git", 
    detailURL: "rnnr", 
    liveLink: 'https://rnnr.vercel.app/',
    repo: true
  }
  const todoListProject = {
    id: ProjectStyles.ProjectTodolist,
    title: "Daily todolist",
    keySentence: "SPA to manage your daily tasks",
    techStack: "React, JS, HTML, CSS, git, Styled components", 
    detailURL: "todolist", 
    liveLink: 'https://todolist-tomigorog.vercel.app/',
    repo: true
  }
  const qamionProject = {
    id: ProjectStyles.ProjectQamion,
    title: "Qamion",
    keySentence: "Logistics optimization software",
    techStack: "Angular, TS, RXJS, HTML, SCSS, Material UI, Leaflet", 
    detailURL: "qamion", 
    liveLink: 'https://qamion.qamcom.com/',
    repo: false
  }
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <ProjectPreview {...qamionProject} />
      <ProjectPreview {...rnnRProject} />
      <ProjectPreview {...todoListProject} />
     
    </div>
  )
}

export default Projects