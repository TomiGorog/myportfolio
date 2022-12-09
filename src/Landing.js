import React from 'react'
import LandingStyle from './CSS-modules/HeroStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import ActionBtn from './ActionBtn';

function Landing() {

  
  let titleRef = React.useRef()
  function onRenderScroll() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
}
  React.useEffect(() => {
    onRenderScroll()
  })
  return (
    <main className='main'>
      <div id="landing"
      
      className={LandingStyle.HeroImg}>
        <div className={LandingStyle.Imgcontent}>
          <div>

          <span 
          ref={titleRef}
          className={LandingStyle.H1Intro}>Hello! My name is</span>
          <h1 className={LandingStyle.HeroH1}>Tamas Gorog</h1>
          </div>
          <p className={LandingStyle.IntroP}>I am a junior front-end developer building for the web.<br></br>
          I have gained experience with React during and after a front end bootcamp but since October, I'm learning and working with Angular and TypeScript. In the future, I would like to master (one of) those frameworks while working on exciting projects.
          </p>

          <ActionBtn 
          // url={"/contact"}
           message={"Read my resume"}  />
        </div>
        
        <div className={LandingStyle.IconDiv}>
          <a href="mailto:tamas.peter.gorog@gmail.com"><HiOutlineMail className={LandingStyle.Icons}></HiOutlineMail></a>
          <a href="https://github.com/TomiGorog" target="_blank"><DiGithubBadge className={LandingStyle.Icons} /></a>
          <a href="https://www.linkedin.com/in/tamas-gorog-354369177/" target="_blank"><AiOutlineLinkedin className={LandingStyle.Icons} /></a>
        </div>
      </div>
    </main>
  )
}

export default Landing