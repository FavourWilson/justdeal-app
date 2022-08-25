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
      <div className={headerStyles.formCard}>
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
        <form>
          <div className={headerStyles.formContainer}>
            <div className={headerStyles.inputGroup}>
              <input
                type="text"
                className="w-[100%] outline-none py-[20px] px-[10px]"
              />
              <label className="">FullName</label>
            </div>
            <div className={headerStyles.inputGroup}>
              <input
                type="text"
                className="w-[100%] mb-0 py-[20px] px-[10px]"
              />
              <label className="">Username</label>
            </div>
            <div className={headerStyles.inputGroup}>
              <input
                type="email"
                className="w-[100%] mb-0 py-[20px] px-[10px]"
              />
              <label className="">Email</label>
            </div>
            <div className={headerStyles.inputGroup}>
              <input
                type="password"
                className="w-[100%] mb-0 py-[20px] px-[10px]"
              />
              <label className="">Password</label>
            </div>
            <div className={headerStyles.btnFloat}>
              <Button text="Register" className={headerStyles.loginButton} />
            </div>
          </div>
        </form>
        <div className={headerStyles.line}></div>
        <div className={headerStyles.formContainer1}>
          <p> &mdash;Or Register With&mdash; </p>
          <div className={headerStyles.socialIcons}>
            <Image
              src={facebook}
              alt="facebook logo"
              width={50}
              height={50}
              className={headerStyles.firstIcon}
            />
            <Image
              src={gmail}
              alt="gmail logo"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p>
            Already have an account?
            <Link href="/login">
              <a> Login.</a>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
