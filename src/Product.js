import React from "react";
import "./App.css";
import Button from "./Button";

export default function Product(props) {
  const handleAddToCart = () => {
    // You can implement the logic to add the product to the cart here
    console.log(`Adding ${props.title} to the cart`);
    // Example: Dispatch an action or update state in the parent component
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
          <Button onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
