import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ShoesOpen from './ShoesOpen';
import WatchOpen from './WatchOpen';
import { useStateContext } from '../context/StateContext';

const Layout = ({children}) => {

  const{ showShoes, showWatches } = useStateContext();

  return (
    <div className='layout'>
      <Head>
        <title>
          HYPESTOP
        </title>
      </Head>
      <header>
        <Navbar />
      </header>
      {showWatches && <WatchOpen /> || showShoes && <ShoesOpen />}
      
      <main className='main-container'>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout