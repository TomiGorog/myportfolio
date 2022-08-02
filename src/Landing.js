import React from 'react'
import LandingStyle from './CSS-modules/HeroStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";

function Landing() {
  return (
    <main className='main'>
      <div id="landing" className={LandingStyle.HeroImg}>
        <span className={LandingStyle.H1Intro}>Hello! My name is</span>
        <h1 className={LandingStyle.HeroH1}>Tamas Gorog</h1>
        <p className={LandingStyle.IntroP}>I am a junior front-end developer looking to be a part of a great team building applications for the web while maintaining exceptional user experience</p>
        <button id={LandingStyle.ActionBtn} className="contactme">Contact me</button>
        <div className={LandingStyle.IconDiv}>
          <DiGithubBadge className={LandingStyle.Icons} />
          <AiOutlineLinkedin className={LandingStyle.Icons} />
        </div>
      </div>
    </main>
  )
}

export default Landing