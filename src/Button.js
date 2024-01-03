import React from "react";

export function ButtonAdd({ onClick }) {
  return (
    <div>
      <button className="Products-Add-Button" onClick={onClick}>
        {" "}
        +
      </button>
    </div>
  );
}

export function ButtonMin({ onClick }) {
  return (
    <div>
      <button className="Products-Remove-Button" onClick={onClick}>
        {" "}
        -
      </button>
    </div>
  );
}

export default function Button({ handleAddToCart, handleRemoveFromCart }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
        height: "100%",
      }}
    >
      <ButtonAdd onClick={handleAddToCart} />

      <ButtonMin onClick={handleRemoveFromCart} />
    </div>
  );
}
