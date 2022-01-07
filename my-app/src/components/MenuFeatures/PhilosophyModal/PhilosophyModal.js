import React from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./PhilosophyModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";

const PhilosophyModal = (props) => {
  return (
    <PopUpCard className="philosophy-popup">
      <header className="philosophy-header">
        <h2>Philosophy</h2>
        <CloseModal
          onClick={props.hidePhilosophyHandler}
          className="closemodal"
        />
      </header>
      <hr />
      <div className="philo-text">
        <p className="philo-para"></p>
        <p className="philo-para"></p>
        <p className="philo-para"></p>
        <p className="philo-para"></p>
      </div>
    </PopUpCard>
  );
};

export default PhilosophyModal;
