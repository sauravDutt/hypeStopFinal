import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai';
import {RiTShirt2Line} from 'react-icons/ri';

const TshirtOpen = () => {

    const {setShowTshirt} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowTshirt(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='navBtn-title'><RiTShirt2Line/> | Shirts / Tshirts</h2>
        </div>
    );
}

export default TshirtOpen;