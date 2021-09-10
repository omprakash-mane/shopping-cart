import React, { useState, createContext } from "react";

export const ProductOrderContext = createContext();

export const ProductOrderProvider = (props) => {
  const [totalCartItems, setTotalCartItemValue] = useState([]);
  return (
    <ProductOrderContext.Provider
      value={[totalCartItems, setTotalCartItemValue]}
    >
      {props.children}
    </ProductOrderContext.Provider>
  );
};
