import React from "react";

import NameCountFormatter from "./NameCountFormatter";
import "./App.css";

function Sidebar({ isVisible, cart, total }) {
  if (!isVisible) return null;

  return (
    <div className="sidebar-visible">
      <div className="cart2">
        <NameCountFormatter inputString={cart} />
        <hr />
        <div>
          <span>Your total price is: </span>
          {total} Tomans
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
