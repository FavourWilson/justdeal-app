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
          .registerBtn {
            background: #f47a60;
            color: #fff;
            border: 0.71px solid #f47a60;
            padding: 0.469rem 1.688rem;
            border-radius: 5px;
            margin-right: 16px;
          }
        `}
      </style>
    </>
  );
}

export default Button;
