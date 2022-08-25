import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TabContext } from './App'

function ActionBtn(props) {
    let navigate = useNavigate()
    let tabContext = React.useContext(TabContext)

    return (
        <button 
        onClick={() => {
            navigate(props.url)
            tabContext.setActiveTab("contact")
        }}
        type="submit"
        className="actionbtn">
            <span>{props.message}</span>
        </button>

    )
}

export default ActionBtn