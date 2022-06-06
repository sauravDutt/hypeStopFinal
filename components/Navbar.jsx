import React from 'react'
import {motion} from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image';
import {AiOutlineShopping} from 'react-icons/ai';

const Navbar = () => {
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
      <button
        type='button'
        className='cart-icon'
        onAbort=""
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar