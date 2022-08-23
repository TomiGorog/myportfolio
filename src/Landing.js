import React from 'react'
import LandingStyle from './CSS-modules/HeroStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
function Landing() {
  return (
    <main className='main'>
      <div id="landing" className={LandingStyle.HeroImg}>
        <div className={LandingStyle.Imgcontent}>
        <span className={LandingStyle.H1Intro}>Hello! My name is</span>
        <h1 className={LandingStyle.HeroH1}>Tamas Gorog</h1>
        <p className={LandingStyle.IntroP}>I am a junior front-end developer looking to be a part of a great team building applications for the web while maintaining exceptional user experience</p>
        <button id={LandingStyle.ActionBtn} className="contactme">Contact me</button>
       
        </div>
        <div className={LandingStyle.IconDiv}>
          <a href="https://github.com/TomiGorog" target="_blank"><DiGithubBadge className={LandingStyle.Icons} /></a>
          <a href="https://www.linkedin.com/in/tamas-gorog-354369177/" target="_blank"><AiOutlineLinkedin className={LandingStyle.Icons} /></a>
        </div>
      </div>
    </main>
  )
}

export default Landing