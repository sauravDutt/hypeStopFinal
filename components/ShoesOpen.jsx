import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'
import {GiRunningShoe} from 'react-icons/gi';

const ShoesOpen = () => {

    const {setShowShoes} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowShoes(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='navBtn-title'><GiRunningShoe/> | Shoes</h2>
        </div>
    );
}


export default ShoesOpen;