import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className="backdrop-addTask" onClick={props.onClick} />;
};

export default Backdrop;
