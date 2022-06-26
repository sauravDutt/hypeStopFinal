import React from 'react';
import Link from 'next/link';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'
import {GiRunningShoe} from 'react-icons/gi';

import { urlFor } from '../lib/client';

const ShoesOpen = ({ product: { image, name, slug, price } }) => {

    const {setShowShoes} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowShoes(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='navBtn-title'><GiRunningShoe/> | Shoes</h2>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                <img 
                    src={urlFor(image && image[0])}
                    width={250}
                    height={250}
                    className="product-image"
                />
                <p className="product-name">{name}</p>
                <p className="product-price">₹{price}</p>
                </div>
            </Link>
        </div>
    );
}

export default ShoesOpen;