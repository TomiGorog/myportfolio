import React from 'react'

function Contact() {
  return (
    <div>

      <form action="https://formsubmit.co/274853e0256b20038b8105f4fb12d38e" method="POST">
        <input type="hidden" name="_subject" value="New enquiry!" />
        <input type="hidden" name="_next" value="http://localhost:3000/contact" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder='Your email address' required />
        <input type="text" name="message" placeholder='What can I do for you?' required />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact