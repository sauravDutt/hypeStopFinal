import React from 'react'

import Link from 'next/link'
import Image from 'next/image';
import {AiOutlineShopping} from 'react-icons';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/">
          <Image src="/logo.jpeg" className='logoImg' alt="logo" width="95" height="50"/>
        </Link>
      </p>
    </div>
  )
}

export default Navbar