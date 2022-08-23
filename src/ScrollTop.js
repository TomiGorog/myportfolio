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
            <AiOutlineArrowUp size={40} />

        </div>
    )
}

export default ScrollTop