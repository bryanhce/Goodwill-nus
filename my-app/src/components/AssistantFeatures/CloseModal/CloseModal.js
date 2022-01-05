import React from "react";
import "./CloseModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CloseModal = (props) => {
  return (
    <div className={`close ${props.className}`} onClick={props.onClick}>
      <FontAwesomeIcon className="faicons" icon="times" />
    </div>
  );
};

export default CloseModal;
