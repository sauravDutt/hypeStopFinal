import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {AiOutlineShopping, AiFillInstagram} from 'react-icons/ai';
import {FiWatch} from 'react-icons/fi';
import {GiRunningShoe, GiClothes} from 'react-icons/gi';

import {Cart} from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();

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
      <a href='https://www.instagram.com/hypestopindia/' target='_blank' rel='noreferrer' className="cart-icon instagram">
      <AiFillInstagram />
      </a>
      <button type="button" className="cart-icon" onClick={() => setShowCart(false)}>
        <GiRunningShoe />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(false)}>
        <FiWatch />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(false)}>
        <GiClothes />
      </button>
      
      <button type="button" className="cart-icon preOrders" onClick={() => setShowCart(false)}>
        Preorders
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