import React from "react";

export function ButtonAdd({ onClick }) {
  return (
    <div>
      <button className="Btn-Add" onClick={onClick}>
        {" "}
        +
      </button>
    </div>
  );
}

export function ButtonMin({ onClick }) {
  return (
    <div>
      <button className="Btn-Remove" onClick={onClick}>
        {" "}
        -
      </button>
    </div>
  );
}

export default function Button({ handleAddToCart, handleRemoveFromCart }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ButtonAdd onClick={handleAddToCart} />

      <ButtonMin onClick={handleRemoveFromCart} />
    </div>
  );
}
