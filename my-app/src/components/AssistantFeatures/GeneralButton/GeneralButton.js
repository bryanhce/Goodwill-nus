import React from "react";
import "./GeneralButton.css";

const GeneralButton = (props) => {
  return (
    <button
      className={`general-button ${props.className}`}
      type={`${props.type}`}
      onClick={props.onClick}
    >
      {props.buttonTitle}
    </button>
  );
};

export default GeneralButton;
