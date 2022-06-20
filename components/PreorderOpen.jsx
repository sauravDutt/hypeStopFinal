import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'

const PreorderOpen = () => {

    const {setShowShoes} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowShoes(false)}>
                <AiOutlineClose />
            </button>
        </div>
    );
}

export default PreorderOpen;