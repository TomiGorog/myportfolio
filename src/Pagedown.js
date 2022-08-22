import React from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowUp } from 'react-icons/ai';
import {useNavigate} from "react-router-dom"

function Pagedown(props) {
  let navigate = useNavigate()
  

  return (
    <div  className='pagebottomcontainer'>
      <div 
      onClick={() => {
        navigate("/projects")
      }}
      
      className='pagebottominnerbox'>
      <AiOutlineArrowLeft  size={40}/>
      <span className='arrowtext'>Back to projects</span>
      </div>
      {/* <div 
      onClick={() => {props.scrollUp()
      props.trialFunct()
      }
    
    }
      className='pagebottominnerbox'>
      <AiOutlineArrowUp size={40} />
      <span className='arrowtext'>Top of the page</span>
      </div> */}

    </div>
  )
}

export default Pagedown