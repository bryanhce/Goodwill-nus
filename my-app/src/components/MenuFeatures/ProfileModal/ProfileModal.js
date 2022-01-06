import React from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./ProfileModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";

const ProgressModal = (props) => {
  return (
    <PopUpCard className="progress-popup">
      <header className="progress-header">
        <h2>Profile</h2>
        <CloseModal
          onClick={props.hideProgressHandler}
          className="closemodal"
        />
      </header>
      <hr />
    </PopUpCard>
  );
};

export default ProgressModal;
