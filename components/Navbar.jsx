import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {AiOutlineShopping} from 'react-icons/ai';
import {RiTShirt2Line} from 'react-icons/ri';
import {FiWatch} from 'react-icons/fi';
import {GiRunningShoe, GiUnderwearShorts} from 'react-icons/gi';

import {Cart} from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities, showShoes,  setShowShoes, showWatches, setShowWatches} = useStateContext();

  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/">
          <Image 
            src="/logo.jpeg" 
            className='logoImg' 
            alt="logo" 
            width="95" 
            height="50" 
            />
        </Link>
      </p>
      {/* <a href='https://www.instagram.com/hypestopindia/' target='_blank' rel='noreferrer' className="cart-icon instagram">
      <AiFillInstagram />
      </a> */}
      <button type="button" className="cart-icon" onClick={() => {if(showShoes == false){ setShowShoes(true);}else{setShowShoes(false);}}}>
        <GiRunningShoe />
      </button>
      <button type="button" className="cart-icon" onClick={() => {if(showWatches == false){ setShowWatches(true);} else{setShowWatches(false);}}}>
        <FiWatch />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(false)}>
        <RiTShirt2Line />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(false)}>
        <GiUnderwearShorts />
      </button>
      
      <button type="button" className="cart-icon preOrders" onClick={() => setShowCart(false)}>
        Preorder
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart /> }
    </div>
  )
}

export default Navbar