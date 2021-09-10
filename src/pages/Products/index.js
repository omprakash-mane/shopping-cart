import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./styles.css";
import CircularIndeterminate from "../../components/Loader";
import ProductItem from "./ProductItem";
import { ProductOrderContext } from "../../context/ProductOrderProvider";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const Products = () => {
  const location = useHistory();
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCartItems, setTotalCartItemValue] =
    useContext(ProductOrderContext);

  let totalItem = 0;
  if (totalCartItems) {
    totalCartItems.forEach((item) => {
      totalItem = totalItem + item.qty;
    });
  }

  const clickNavToCheckoutPage = () => {
    location.push("/checkout");
  };

  const addItemToCart = (item) => {
    const existItem = totalCartItems.find((x) => x.id === item.id);
    if (existItem) {
      setTotalCartItemValue(
        totalCartItems.map((x) => {
          return x.id === item.id
            ? { ...existItem, qty: existItem.qty + 1 }
            : x;
        })
      );
    } else {
      setTotalCartItemValue([...totalCartItems, { ...item, qty: 1 }]);
    }
  };

  const removeItemToCart = (item) => {
    const existItem = totalCartItems.find((x) => x.id === item.id);
    if (!existItem) {
      return;
    }
    if (existItem.qty === 1) {
      setTotalCartItemValue(totalCartItems.filter((x) => x.id !== item.id));
    } else {
      setTotalCartItemValue(
        totalCartItems.map((x) => {
          return x.id === item.id
            ? { ...existItem, qty: existItem.qty - 1 }
            : x;
        })
      );
    }
  };

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        let productList = [];
        if (res.data) {
          productList = res.data.map((product) => {
            return {
              id: product.id,
              price: product.price,
              category: product.category,
              image: product.image,
              qty: 0,
            };
          });
        }
        setProductsList(productList);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error("fetch products api call failed");
      });
  }, []);
  return (
    <div>
      <div className="menu-bar-view-cart">
        <Button
          onClick={() => {
            console.log(totalCartItems);
            clickNavToCheckoutPage();
          }}
          value={`view cart: ${totalItem}`}
        />
      </div>
      <div className="product-item-container">
        {productsList.map((item, index) => {
          return (
            <ProductItem
              key={index}
              item={item}
              addItemToCart={() => addItemToCart(item)}
              removeItemToCart={() => removeItemToCart(item)}
              totalCartItems={totalCartItems}
            ></ProductItem>
          );
        })}
        {isLoading && <CircularIndeterminate />}
      </div>
    </div>
  );
};
export default Products;
