import React from 'react';
import {useStateContext} from '../context/StateContext';
import {AiOutlineClose} from 'react-icons/ai'
import {GiRunningShoe} from 'react-icons/gi';
import Product from './Product';
import {client} from '../lib/client';

const ShoesOpen = ({products}) => {

    const {setShowShoes} = useStateContext();

    return (
        <div
            className='onClickNavBtn-container'
        >
            <button type='button' className='closeNavBtn-container' onClick={() => setShowShoes(false)}>
                <AiOutlineClose />
            </button>
            <h2 className='navBtn-title'><GiRunningShoe/> | Shoes</h2>
            
            <div className="products-container">
                {products?.map((product) => <Product key={product.id} product={product} />)}
            </div>
            
        </div>
    );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    return {
      props :{ products}
    }
  }


export default ShoesOpen;