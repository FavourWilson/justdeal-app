import React from 'react';
import headerStyles from '../styles/Header.module.css';
import Pricetag from './Pricetag';

const TrendingProduct = () => {
  return (
    <>
      <p className="font-semibold text-xl ml-12 pb-4">Trending Products</p>
      <div className={headerStyles.trendCard}>
        <div className={headerStyles.tCard1}>
          <Pricetag text="21,000" className="tag" />
        </div>
        <div className={headerStyles.tCard2}>
          <Pricetag text="8,000" className="tag" />
        </div>
        <div className={headerStyles.tCard3}>
          <Pricetag text="5,000" className="tag" />
        </div>
        <div className={headerStyles.tCard4}>
          <Pricetag text="86,000" className="tag" />
        </div>
        <div className={headerStyles.tCard5}>
          <Pricetag text="26,000" className="tag" />
        </div>
        <div className={headerStyles.tCard6}>
          <Pricetag text="2,256,000" className="tag" />
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
