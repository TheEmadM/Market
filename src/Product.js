import React from "react";
import "./App.css";
import ButtonAdd, { ButtonMin } from "./Button";
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
      console.log(
        `${quantity + 1} kgs of ${props.title} is in the cart.${
          1 * props.price
        } k.tomans is added to your total`
      );
    } else {
      alert(`Sorry, no more ${props.title} left in stock.`);
    }
  };

  const handleRemoveFromCart = () => {
    if (stock < props.totStock) {
      props.onRemoveFromCart(props.price);

      setStock(stock + 1);
      setQuantity(quantity - 1);
      console.log(
        ` ${quantity - 1} kgs ${props.title} is remained. ${
          1 * props.price
        } k.tomans is removed from your total`
      );
    } else {
      alert(`You have no ${props.title} in your cart.`);
    }
  };

  return (
    <div className="product-component">
      <div className="product-holder">
        <img className="image" src={props.url} alt={props.title} />

        <p>
          <b>Title:</b> {props.title}
        </p>
        <p>
          <b>Price:</b> {props.price} tomans
        </p>
        <p>
          <b>Stock:</b> {props.stock} kgs
        </p>
        <p>
          <b>Description:</b> <i>{props.description}</i>
        </p>
        <div className="add-remove-cart">
          <ButtonAdd onClick={handleAddToCart} />
          <div className="btnH">Add/Remove</div>
          <ButtonMin onClick={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}
