import React from 'react'
import ContactStyles from './CSS-modules/ContactStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import ActionBtn from './ActionBtn';
import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate = useNavigate()
  const [formSent, setFormSent] = React.useState(false)
  const [userMessage, setUserMessage] = React.useState(null)
  const [userName, setUserName] = React.useState(null)
  const [userEmail, setUserEmail] = React.useState(null)
  return (
    <div className='contact'>
      <h2>Contact me</h2>
      
        <label for="name">Name:</label>
        <input onChange={(e) => {
          setUserName(e.target.value)
        }} type="text" id="name" name="name" placeholder="Your name" required />
        <label for="email">Email:</label>
        <input onChange={(e) => {
          setUserEmail(e.target.value)
        }} type="email" id="email" name="email" placeholder='Where should I reply to?' required />
        <label for="message">Your message:</label>
        <textarea onChange={(e) => {
          setUserMessage(e.target.value)
        }} type="text" id="message" name="message" placeholder='What can I do for you?' required
          rows={5} />
        <button
          onClick={(event) => {
            formSubmit(event)
            navigate("/formsubmitted");
           
          }}
          type="submit"
          className="actionbtn">
          <span>Send message</span>
        </button>
 
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

 function formSubmit(event) {
    event.preventDefault();
    fetch("https://formsubmit.co/ajax/your@email.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail,
        message: userMessage
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    // your submit logic
  }
  
}

export default Contact