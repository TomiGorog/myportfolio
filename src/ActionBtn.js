import React from 'react'
import { useNavigate } from 'react-router-dom'

function ActionBtn(props) {
    let navigate = useNavigate()

    return (
        <a target="_blank"
        href='https://drive.google.com/drive/folders/1Eu-6gGULSMrZgix-8wsU8O_bwHvKIZ4G?usp=sharing'
        onClick={() => {
            // navigate(props.url)
            // // navigate(props.url, { state: { fromHome: true } });
        }}
        className="actionbtn">
            <span>{props.message}</span>
        </a>

    )
}

export default ActionBtn