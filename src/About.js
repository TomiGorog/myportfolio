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
          I have quit my job and started the Front-end Development bootcamp at Progmatic Academy.
          During an intense five month full-time course, I've learned about HTML, CSS, JS, Responsive web design, git, React.js, Node.js and Firebase.
          Using these technologies during a 6 weeks long project work we built a community based delivery app from scratch.</p>
        <figure>
          <img className="me" src={me} alt="Me doing what I like, eating"></img>
          <figcaption>Me doing what I like to do, eating delicious thai food</figcaption>
        </figure>

        <p  className='textonleft'>
          During my bootcamp course, for 3 months, I moved to Thailand which has been an amazing experience. This taught me how to work remotely with efficiency.
          Nontheless it is very motivating as during my developer career,
          I want to get to a position where I can work remotely from such an amazing location,
          while still delivering exceptional results at work.
          Something that shows my perseverance and diligence: I started my coding journey with the mobile learning app, Mimo
          and I was on a coding streak for 338 days, Until I completed the full Web development path and practiced quite a lot.
        </p>
        
      <p>
        <span className="highlighted">In my free time,</span> I enjoy playing percussion instruments and jamming with other musicians, travelling,
        exploring different cultures and cuisines.
        Or if I am home, collecting and taking care of houseplants.
      </p>
      <p>I'm actively seeking my first position in the industry, if you think that I could be a great fit for your team, please contact me on my <a className='accented' href="mailto:tamas.peter.gorog@gmail.com">email</a> or on <a className='accented' href="https://www.linkedin.com/in/tamas-gorog-354369177/" target="_blank">Linkedin</a>!
</p>
    </div>
  )
}

export default About