import React from "react";
import "./App.css";
import ButtonAdd, { ButtonMin } from "./Button";
import { useState } from "react";

export default function Product(props) {
  const [stock, setStock] = useState(props.stock);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (stock > 0) {
      // Call the parent component's function to update the total
      props.onAddToCart(props.price);

      // Decrease the stock by 1
      setStock(stock - 1);
      setQuantity(quantity + 1);
      console.log(
        `Added ${1} kgs ${props.title} (${
          1 * props.price
        } k.tomans) is added to the cart`
      );
    } else {
      // Alert if the product is out of stock
      alert(`Sorry, no more ${props.title} left in stock.`);
    }
  };

  const handleMinCart = () => {
    if (stock <= props.stock - 1) {
      // Call the parent component's function to update the total
      props.onAddToCart(-props.price);

      // Decrease the stock by 1
      setStock(stock + 1);
      setQuantity(quantity - 1);
      console.log(
        ` ${quantity - 1} kgs ${props.title} is remained. ${
          1 * props.price
        } k.tomans is removed from your total`
      );
    } else {
      // Alert if the product is out of stock
      alert(`no ${props.title} left in your cart.`);
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
        <div className="add">
          <ButtonAdd onClick={handleAddToCart} />
          <div className="btnH">Add/Remove</div>
          <ButtonMin onClick={handleMinCart} />
        </div>
      </div>
    </div>
  );
}
