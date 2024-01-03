import React from "react";
import "./App.css";
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

  function ButtonAdd({ onClick }) {
    return (
      <div>
        <button className="Products-Add-Button" onClick={onClick}>
          {" "}
          +
        </button>
      </div>
    );
  }

  function ButtonMin({ onClick }) {
    return (
      <div>
        <button className="Products-Remove-Button" onClick={onClick}>
          {" "}
          -
        </button>
      </div>
    );
  }

  function Button({ handleAddToCart, handleRemoveFromCart }) {
    return (
      <div
        className="Button-holder"
        style={{
          width: "1000px",
          border: "1px solid",
          borderColor: "#c8d6c4",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "auto",
            height: "100%",
          }}
        >
          <span style={{}}>
            <ButtonMin onClick={handleRemoveFromCart} />
          </span>
          <p
            style={{
              padding: "0 30px",
              fontFamily: "Times New Roman",
              fontSize: "14px",
              paddingBottom: "5px",
            }}
          >
            {" "}
            {quantity} kgs{" "}
          </p>
          <ButtonAdd onClick={handleAddToCart} />
        </div>
      </div>
    );
  }

  return (
    <div className="product-component">
      <div className="product-holder">
        <div>
          <img className="product-image" src={props.url} alt={props.title} />

          <p>
            <b>{props.title}</b>
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
        </div>
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
