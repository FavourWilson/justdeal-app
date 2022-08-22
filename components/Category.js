import Image from 'next/image';
import React from 'react';
import car from '../public/assets/car.png';
import comp from '../public/assets/comp.png';
import cosmetics from '../public/assets/cosmetics.png';
import shirt from '../public/assets/shirt.png';

const Category = () => {
  return (
    <>
      <div className="card shadow-lg xl:container hover:shadow-xl p-8 mt-6 rounded-2xl overscroll-x-contain">
        <div className="grid gap-4 grid-row-3 grid-cols-6">
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={shirt}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={shirt}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={cosmetics}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={cosmetics}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={car}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={car}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={cosmetics}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
          <a className="cats-box">
            <p>Electronics</p>
            <Image
              src={comp}
              className="cat-icon"
              alt="category icon"
              width={33}
              height={33}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Category;
