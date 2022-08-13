import Head from 'next/head';
import React from 'react';
import Header from './Header';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - JustdealNG' : 'JustdealNG'}</title>
        <meta
          name="description"
          content="A marketplace to buy and sell second-hand items to anyone anywhere."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="xl:container xl:mx-auto mt-4 px-4">{children}</main>
        <footer className="xl:container xl:mx-auto">
          <p>Footer</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
