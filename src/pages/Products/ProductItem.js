import React from "react";
import Button from "../../components/Button";
import "./styles.css";

const ProductItem = ({
  item,
  addItemToCart,
  removeItemToCart,
  totalCartItems,
}) => {
  let qtyItem = 0;
  if (totalCartItems) {
    const fetchItem = totalCartItems.find((x) => x.id === item.id);

    qtyItem = fetchItem ? fetchItem.qty : 0;
  }

  return (
    <>
      <div className={`product-item hvr-grow-shadow`}>
        <img
          src={item.image}
          alt={`product_image_${item.title}`}
          className="product-item-img"
        ></img>
        <div className="product-item-name">
          <span className="product-item-name-title">{`Name: `}</span>
          <span>{item.title}</span>
        </div>
        <div className="product-item-price">
          <span className="product-item-price-title">{`Price: `}</span>
          <span>{item.price}</span>
        </div>
        <div className="product-item-category">
          <span className="product-item-category-title">{`Category: `}</span>
          <span>{item.category}</span>
        </div>
        <div className="btn-add-remove">
          <Button onClick={addItemToCart} value={`+`} />
          <input
            className="btn-add-remove-total"
            disabled={true}
            value={qtyItem}
          />
          <Button onClick={removeItemToCart} value={`-`} />
        </div>
      </div>
    </>
  );
};

export default ProductItem;
