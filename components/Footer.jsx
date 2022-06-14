import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 HYPESTOP, All rights reserved  </p>
      <p> Follow us on Instagram at <br /><a href='https://www.instagram.com/hypestopindia/' target='_blank' rel='noreferrer' className="instagram">
      <AiFillInstagram />/hypestopindia
      </a></p>
    </div>
  )
}

export default Footer