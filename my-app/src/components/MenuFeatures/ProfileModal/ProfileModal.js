import React from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./ProfileModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import Dashboard from "../Dashboard/Dashboard";

const ProgressModal = (props) => {
  return (
    <PopUpCard className="progress-popup">
      <header className="progress-header">
        <h2>Progress</h2>
        <CloseModal
          onClick={props.hideProgressHandler}
          className="closemodal"
        />
      </header>
      <hr />
      <Dashboard />
    </PopUpCard>
  );
};

export default ProgressModal;
