import React from 'react'
import me from './images/eating.jpg'
function About() {
  return (
    <div className='about'>
      <h2>About me</h2>
      <p>
        <span className="highlighted">I began</span> my transition into tech in 2020 when I started to learn UX
        design because I wanted to work with digital products from the human side of things. 
        After a few months, I turned to coding.
         From the beginning of my coding journey I was sure that I want to learn and do front-end development.
        I have been learning on my own for a few months beside a full-time job in the hospitality industry.
        However, I have realized that my learning style needed some improvement, so, after I have saved enough,
        I have quit my job and started the FrontEnd Development bootcamp at Progmatic Academy. 
        During an intense five month full-time course,
         I moved to Thailand for 3 months which has been and still is, an amazing experience.
         Nontheless a real motivation as during my developer career, 
         I want to get to a position where I can work remotely from such an amazing location, 
         while still delivering exceptional results at work.
         Something that shows my perseverance and diligence: I started my coding journey with the mobile learning app, Mimo
         and today, I am on my coding streak for the 331th day &#40; 08.08.2022	&#41;
      </p>
    <figure>
      <img className="me" src={me} alt="Me doing what I like, eating"></img>
    <figcaption>Me doing what I like to do, eating great local food</figcaption>
    </figure>
      <p>
        <span className="highlighted">In my free time,</span> I enjoy playing percussion instruments and jamming with other musicians, travelling, 
        exploring different cultures and cuisines.
        Or if I am home, collecting and taking care of houseplants.
      </p>
    </div>
  )
}

export default About