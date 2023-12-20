import React from "react";

export default function ButtonAdd({ onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {" "}
        +
      </button>
    </div>
  );
}

export function ButtonMin({ onClick }) {
  return (
    <div>
      <button className="btnn" onClick={onClick}>
        {" "}
        -
      </button>
    </div>
  );
}
