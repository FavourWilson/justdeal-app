import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TrendingProduct from './TrendingProduct';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <div className="ml-32 mr-32">
=======
      <Nav />
      <div className="ml-8 mr-8">
>>>>>>> b86b149e44c5c5c605dc05bdb6ac0cba56654a61
        <Banner />
        {/* <main className="xl:container xl:mx-auto mt-4 px-4"> */}
        {children}

        {/* </main> */}
        <TrendingProduct />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
