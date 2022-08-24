import React from 'react'
import { useNavigate } from 'react-router-dom'
function Reply() {
    let navigate = useNavigate()
    React.useEffect(() => {
        setTimeout(() => {
            console.log("vissza a főoldalra")
            navigate("/")
        },5000)
    })
  return (
    <div className='replyform'>

        <h2>Form submitted, <br></br> Thank you</h2>
        <p>I will try to get back to you as soon as possible.</p>
        <span>Best regards, Tamas</span>
    </div>
  )
}

export default Reply