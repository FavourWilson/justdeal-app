// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import Logo from '../public/logo.png';

const Header = () => {
  return (
    <header className="shadow-md px-4">
      <div className="xl:container xl:mx-auto flex flex-col h-20 py-6 items-center align-items-center sm:flex-row sm:justify-between">
        <div className="flex flex-row align-items-center justify-center">
          {/* <Image
            src={Logo}
            alt="Main logo"
            width={90}
            height={40}
            className="mr-5"
          /> */}
          <h1 className="logo font-bold mr-4 block text-base">JustdealNG</h1>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 bg-transparent border-solid border-gray-400 rounded-lg search-input"
          />
        </div>
        <div>
          <Link href="/login">
            <a className="btn btn-low p-2 border-solid">Login</a>
          </Link>
          <Link href="/register">
            <a className="btn btn-active p-2 border-none">Register</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
