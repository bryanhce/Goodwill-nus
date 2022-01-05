import React from "react";
import "./ViewFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewFilter = (props) => {
  return (
    // for onClick, remember no () at the end of the function!!!
    <div onClick={props.onShowFilterPopUp}>
      <FontAwesomeIcon className="faicons filter" icon="filter" />
    </div>
  );
};

export default ViewFilter;
