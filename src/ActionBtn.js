import React from 'react'

function ActionBtn(props) {
    return (
        <button 
        type="submit"
        className="actionbtn">
            <span>{props.message}</span>
        </button>

    )
}

export default ActionBtn