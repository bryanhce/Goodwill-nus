import React from "react";
import "./NumberBox.css";

const NumberBox = (props) => {
  return (
    <div className={`numberbox ${props.className}`}>
      <header className="numberbox-header">
        <strong>{props.header}</strong>
      </header>
      <span className="numberbox-number">{props.number}</span>
    </div>
  );
};

export default NumberBox;
