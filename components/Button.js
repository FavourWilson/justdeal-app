import React from 'react';

function Button({ className, text }) {
  return (
    <>
      <button className={className}>{text}</button>
      <style jsx>
        {`
          .loginBtn {
            color: #f47a60;
            border: 0.71px solid #f47a60;
            padding: 0.469rem 1.688rem;
            border-radius: 5px;
            margin-right: 16px;
          }
          .loginBtn:hover {
            background: #f47a60;
            color: #fff;
            border: none;
            opacity: 0.8;
            transition: ease-in 0.3s;
          }
          .registerBtn {
            background: #f47a60;
            color: #fff;
            border: 0.71px solid #f47a60;
            padding: 0.469rem 1.688rem;
            border-radius: 5px;
            margin-right: 16px;
          }
          .registerBtn:hover {
            opacity: 0.8;
            transition: ease-in 0.3s;
          }
        `}
      </style>
    </>
  );
}

export default Button;
