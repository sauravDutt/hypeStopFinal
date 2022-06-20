import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'

const WatchOpen = () => {

    const {setShowWatches} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowWatches(false)}>
                <AiOutlineClose />
            </button>
            <h2>Warches</h2>
        </div>
    );
}

export default WatchOpen;