import React from 'react'
import LandingStyle from './CSS-modules/HeroStyles.module.css'


function Landing() {
  return (
    <main className='main'>
        <div className={LandingStyle.HeroImg}>
            <span className={LandingStyle.H1Intro}>Hello! My name is</span>
            <div className={LandingStyle.HeroH1}>Tamas Gorog</div>
        </div>
    </main>
  )
}

export default Landing