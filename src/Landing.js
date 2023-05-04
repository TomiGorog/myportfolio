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
          <p className={LandingStyle.IntroP}>
          As a frontend developer I've gained experience with React and Angular. My goal is to continously improve my skills in software development. Currently I'm seeking new challenges using React or Angular. 
          </p>

          <ActionBtn 
          // url={"/contact"}
           message={"Read my resume"}  />
        </div>
        
        <div className={LandingStyle.IconDiv}>
          <a href="mailto:tamas.peter.gorog@gmail.com"><HiOutlineMail className={LandingStyle.Icons}></HiOutlineMail></a>
          <a href="https://github.com/TomiGorog" target="_blank" rel="noreferrer"><DiGithubBadge className={LandingStyle.Icons} /></a>
          <a href="https://www.linkedin.com/in/tamas-gorog-354369177/" target="_blank" rel="noreferrer"><AiOutlineLinkedin className={LandingStyle.Icons} /></a>
        </div>
      </div>
    </main>
  )
}

export default Landing