import { SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../public/jd-logo.png';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className="px-4 fixed top-0 right-0 left-0">
      <div className="xl:container xl:mx-auto flex flex-col h-20 py-6 items-center align-items-center sm:flex-row sm:justify-between">
        <div className="flex flex-row items-center justify-center">
          <Image
            src={Logo}
            alt="Main logo"
            width={200}
            height={40}
            className="inline-block mr-10 "
          />
          {/* <h1 className="logo font-bold mr-4 block text-base">JustdealNG</h1> */}

          <SearchIcon className="h-5 w-5 text-gray-500 hey" />
          <input
            type="text"
            placeholder="Search..."
            className={headerStyles.searchBox}
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
