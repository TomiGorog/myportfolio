import React from 'react'
import ContactStyles from './CSS-modules/ContactStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import ActionBtn from './ActionBtn';
import Reply from './Reply';

function Contact() {

  const [formSent, setFormSent] = React.useState(false)
  return (
    <div className='contact'>
      <h2>Contact me</h2>
      <form className={ContactStyles.Form} action="https://formsubmit.co/274853e0256b20038b8105f4fb12d38e" method="POST">
        <input type="hidden" name="_subject" value="New enquiry!" />
        <input type="hidden" name="_next" value="http://localhost:3000/formsubmitted" />
        <input type="hidden" name="_captcha" value="false" />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Where should I reply to?' required />
        <label for="message">Your message:</label>
        <input type="text" id="message" name="message" placeholder='What can I do for you?' required />
      <ActionBtn onClick={() => setFormSent(true)} message={"Send message"}/>
      </form>
      <div className={ContactStyles.AltContact}>
        <h3>Alternatively, you can find me on:</h3>
        <div>
          <a href="https://github.com/TomiGorog" target="_blank"><DiGithubBadge className={ContactStyles.Icons} /></a>
          <a href="https://www.linkedin.com/in/tamas-gorog-354369177/" target="_blank"><AiOutlineLinkedin className={ContactStyles.Icons} /></a>
        </div>
        <p>tamas.peter.gorog@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact