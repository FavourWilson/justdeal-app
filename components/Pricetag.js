import React from 'react';

function Pricetag({ className, text }) {
  return (
    <>
      <span className={className}>₦ {text}</span>
      <style jsx>
        {`
          .tag {
            color: #fff;
            border: none;
            padding: 0.438rem 0.813rem;
            border-radius: 50px;
            background: #f47a60;
            cursor: default;
          }
        `}
      </style>
    </>
  );
}

export default Pricetag;
