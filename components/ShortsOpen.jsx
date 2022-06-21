import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'

const ShortsOpen = () => {

    const {setShowShorts} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowShorts(false)}>
                <AiOutlineClose />
            </button>
            <h2>Shorts</h2>
        </div>
    );
}

export default ShortsOpen;