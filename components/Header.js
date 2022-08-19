import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../public/jd-logo2.png';
import headerStyles from '../styles/Header.module.css';
import Button from './Button';

const Header = () => {
  return (
    <header className="px-4 block top-0 right-0 left-0">
      <div className="xl:container xl:mx-auto flex flex-col h-20 py-6 items-center align-items-center sm:flex-row sm:justify-between">
        <div className="flex flex-row items-center justify-center">
          <div className="ralatvive flex align-start">
            <Image src={Logo} alt="Main logo" width={250} height={50} />
          </div>
          <div className={headerStyles.searchBox}>
            <SearchIcon className="relative left-1 h-4 w-4.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className={headerStyles.searchInput}
            />
          </div>
        </div>
        <div>
          <Link href="/login">
            <a>
              <Button text="Login" className="loginBtn" />
            </a>
          </Link>
          <Link href="/register">
            <a>
              <Button text="Register" className="registerBtn" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
