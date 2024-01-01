import React from "react";
import "./App.css";
import Button from "./Button";
import { useState } from "react";

export default function Product(props) {
  const [stock, setStock] = useState(props.stock);
  const [quantity, setQuantity] = useState(0);

  // this function handle adding products to the cart (checks stock, decrease stock, add price to total and increase the quantity of it in cart)
  const handleAddToCart = () => {
    if (stock > 0) {
      props.onAddToCart(props.price);

      setStock(stock - 1);
      setQuantity(quantity + 1);
    } else {
      alert(`Sorry, no more ${props.title} left in stock.`);
    }
  };

  const handleRemoveFromCart = () => {
    if (stock < props.totStock) {
      props.onRemoveFromCart(props.price);

      setStock(stock + 1);
      setQuantity(quantity - 1);
    } else {
      alert(`You have no ${props.title} in your cart.`);
    }
  };

  return (
    <div className="product-component">
      <div className="product-holder">
        <img className="product-image" src={props.url} alt={props.title} />

        <p>
          <b>Title: {props.title}</b>
        </p>
        <p>
          <b>Price:</b>{" "}
          <span style={{ color: "#8b0000", fontSize: "18px" }}>
            {props.price} tomans
          </span>
        </p>
        <p style={{ fontFamily: "Roboto" }}>
          <b>Stock:</b> {props.stock} kgs
        </p>
        <p>
          <b>Description:</b> <i>{props.description}</i>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
}
