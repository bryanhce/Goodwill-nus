import React from "react";
import "./PopUpCard.css";

const PopUpCard = (props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default PopUpCard;
