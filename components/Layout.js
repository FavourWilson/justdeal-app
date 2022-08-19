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
      <Nav />
      <div className="ml-32 mr-32">
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
