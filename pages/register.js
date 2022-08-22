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

const Register = () => {
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
          <h3 className="mt-2">Register an Account</h3>
        </div>
        <div className={headerStyles.formContainer}>
          <form>
            <div className="input-box">
              <label>FullName</label>
              <input type="text" />
            </div>
            <div className="input-box">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input type="email" />
            </div>
            <div className="input-box">
              <label>Password</label>
              <input type="password" />
            </div>
            <a>
              By clicking Register, you acknowledge you have read and agreed to
              our Terms of Use and Privacy Policy.
            </a>
            <Button text="Login" className="registerBtn" />
          </form>
          <div>
            <p> &mdash;Or Register With&mdash; </p>
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
              Already have an account?
              <Link href="/login">
                <a> Login.</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
