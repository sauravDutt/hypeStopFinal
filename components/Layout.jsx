import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>
          HYPESTOP
        </title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CE0ECH2BLR"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-CE0ECH2BLR');
        </script> 
      </Head>
      <header>
        <Navbar />
      </header>

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