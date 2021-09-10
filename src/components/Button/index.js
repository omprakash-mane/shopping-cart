import React from "react";
import "./styles.css";
const Button = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {value}
    </button>
  );
};

export default Button;
