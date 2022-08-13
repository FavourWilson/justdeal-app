const Button = ({ children }) => {
  return (
    <div className="button">
      <button className="text-3xl font-bold">{children}</button>
    </div>
  );
};

export default Button;
