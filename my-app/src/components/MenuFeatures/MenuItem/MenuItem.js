import React from "react";

import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div onClick={props.onClick}>
      <h3 className="menu-item">{props.itemName}</h3>
      <hr className="menu-item-hr" />
    </div>
  );
};

export default MenuItem;
