import React from 'react'
import { useNavigate } from 'react-router-dom'

function ActionBtn(props) {
    let navigate = useNavigate()

    return (
        <button 
        onClick={() => {
            // navigate(props.url)
            navigate(props.url, { state: { fromSpecificPage: true } });
        }}
        type="submit"
        className="actionbtn">
            <span>{props.message}</span>
        </button>

    )
}

export default ActionBtn