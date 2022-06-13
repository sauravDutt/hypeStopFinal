import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {AiOutlineShopping, AiFillInstagram} from 'react-icons/ai';
import {FiWatch} from 'react-icons/fi';
import {FaTshirt} from 'react-icons/fa';
import {GiRunningShoe, GiUnderwearShorts} from 'react-icons/gi';

import {Cart} from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div className="navbar-container">
      <a href='https://www.instagram.com/hypestopindia/' target='_blank' className="cart-icon instagram">
      <AiFillInstagram />
      </a>
      <button type="button" className="cart-icon" onClick={""}>
        <GiRunningShoe />
      </button>
      <button type="button" className="cart-icon" onClick={""}>
        <FiWatch />
      </button>
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
      <button type="button" className="cart-icon" onClick={""}>
        <FaTshirt />
      </button>
      
      <button type="button" className="cart-icon" onClick={""}>
        <GiUnderwearShorts />
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