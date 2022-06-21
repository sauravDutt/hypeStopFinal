import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'

const TshirtOpen = () => {

    const {setShowTshirt} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowTshirt(false)}>
                <AiOutlineClose />
            </button>
            <h2>Tshirts</h2>
        </div>
    );
}

export default TshirtOpen;