import React from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowUp } from 'react-icons/ai';


function Pagedown() {
  return (
    <div className='pagebottomcontainer'>
      <div className='pagebottominnerbox'>
      <AiOutlineArrowLeft  size={40}/>
      <span className='arrowtext'>Back to projects</span>
      </div>
      <div className='pagebottominnerbox'>
      <AiOutlineArrowUp size={40} />
      <span className='arrowtext'>Top of the page</span>
      </div>

    </div>
  )
}

export default Pagedown