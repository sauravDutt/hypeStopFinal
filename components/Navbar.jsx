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
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiFillInstagram />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <GiRunningShoe />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
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
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <FaTshirt />
      </button>
      
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
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