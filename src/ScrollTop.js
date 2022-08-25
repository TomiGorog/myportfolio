import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

function ScrollTop(props) {

    return (
        
        <div
            onClick={() => {
                props.up()
            }
            }
            className='scrollToTop'>
            <AiOutlineArrowUp size={50} />
            

        </div>
    )
}

export default ScrollTop