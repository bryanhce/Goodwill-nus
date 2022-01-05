import React from "react";

import "./PriorityHeader.css";

const PriorityHeader = (props) => {
  return (
    <h4 className={`pri-header ${props.className}`}>{props.priorityLevel}</h4>
  );
};

export default PriorityHeader;
