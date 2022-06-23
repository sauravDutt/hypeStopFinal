import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai';
import {FiWatch} from 'react-icons/fi';

const WatchOpen = () => {

    const {setShowWatches} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowWatches(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='navBtn-title'><FiWatch/> | Watches</h2>
        </div>
    );
}

export default WatchOpen;