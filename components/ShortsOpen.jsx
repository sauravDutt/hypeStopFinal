import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai';
import {GiUnderwearShorts} from 'react-icons/gi';

const ShortsOpen = () => {

    const {setShowShorts} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowShorts(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='navBtn-title'><GiUnderwearShorts/> | Shorts</h2>
        </div>
    );
}

export default ShortsOpen;