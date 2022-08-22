import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import facebook from '../public/assets/facebook.png';
import gmail from '../public/assets/gmail.png';
import Logo from '../public/jd-logo2.png';
import headerStyles from '../styles/Header.module.css';

const Login = () => {
  return (
    <>
      <Header />
      <Nav className="mb-8" />
      <div className="card w-4/6 shadow-lg container flex flex-col align-items-center justify-content-center pt-12">
        <div className={headerStyles.formHead}>
          <Image
            src={Logo}
            alt="Main logo"
            width={130}
            height={35}
            className=""
          />
          <h3 className="mt-2">Login to your Account</h3>
        </div>
        <div className={headerStyles.formContainer}>
          <form>
            <div className="input-box">
              <label>Email Address or Username</label>
              <input type="text" />
            </div>
            <div className="input-box">
              <label>Password</label>
              <input type="text" />
            </div>
            <Link href="/reset-password">
              <a>Forget Password?</a>
            </Link>
            <a>
              <Button text="Login" className="registerBtn" />
            </a>
          </form>
          <div>
            <p> &mdash;Or Login With&mdash; </p>
            <Image
              src={facebook}
              alt="facebook logo"
              width={50}
              height={50}
              className=""
            />
            <Image
              src={gmail}
              alt="gmail logo"
              width={50}
              height={50}
              className=""
            />
            <p>
              Don&apos;t have an account?
              <Link href="/register">
                <a> Register.</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
