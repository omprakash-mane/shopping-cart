import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const location = useHistory();

  const clickNavToProductsPage = () => {
    location.push("/products");
  };
  return (
    <div className="home">
      <button
        type="button"
        id="navigate-to-products"
        onClick={clickNavToProductsPage}
        className="home__navigate-top-products"
      >
        Click here to view all the products!!!
      </button>
    </div>
  );
};
export default Home;
