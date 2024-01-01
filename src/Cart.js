import React from "react";

export default function Cart({ onClick }) {
  return (
    <>
      <button className="Cart-Button" onClick={onClick}>
        <span>&gt;&gt;</span>
      </button>
    </>
  );
}
