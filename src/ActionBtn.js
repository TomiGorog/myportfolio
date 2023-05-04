import React from 'react'

function ActionBtn(props) {

    return (
        <a target="_blank"
        href='https://drive.google.com/drive/folders/1Eu-6gGULSMrZgix-8wsU8O_bwHvKIZ4G?usp=sharing' rel="noreferrer"
       
        className="actionbtn">
            <span>{props.message}</span>
        </a>

    )
}

export default ActionBtn