import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'

const PreorderOpen = () => {

    const {setShowPreorders} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowPreorders(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='preorderContainerOnClickbtn-title'><span className='secondColor'>Pre</span>order</h2>
        </div>
    );
}

export default PreorderOpen;