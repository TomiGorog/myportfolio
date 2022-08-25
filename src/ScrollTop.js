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
                   {props.pageWidth > 1024 ?  
                <AiOutlineArrowUp size={75} />
                : props.pageWidth > 767 ?
                <AiOutlineArrowUp size={65} />
                : props.pageWidth > 500 ?
                <AiOutlineArrowUp size={55} />
                :
                <AiOutlineArrowUp size={45} />}
            </div>   
    )
}

export default ScrollTop