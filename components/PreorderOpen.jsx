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
            <h2>Preorder</h2>
        </div>
    );
}

export default PreorderOpen;