import React from "react";

export default function Button({ onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {" "}
        Add to cart
      </button>
      <button className="btn" onClick={onClick}>
        {" "}
        Add to cart
      </button>
    </div>
  );
}
