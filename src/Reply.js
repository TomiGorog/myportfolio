import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TabContext } from './App'
function Reply() {
    let navigate = useNavigate()
    let tabContext = React.useContext(TabContext)

    React.useEffect(() => {
      tabContext.setActiveTab(undefined)
        setTimeout(() => {
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