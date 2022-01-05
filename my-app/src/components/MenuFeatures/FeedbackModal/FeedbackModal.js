import React from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./FeedbackModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";

const FeedbackModal = (props) => {
  return (
    <PopUpCard className="feedback-popup">
      <header className="feedback-header">
        <h2>Feedback</h2>
        <CloseModal
          onClick={props.hideFeedbackHandler}
          className="closemodal"
        />
      </header>
      <hr />
      <form className="feedback-form">
        <p className="feedback-form-header">
          We take your feedback seriously! Do share with us your concerns
        </p>
        <textarea className="feedback-form-textarea" />
        <button className="feedback-form-button">Submit</button>
      </form>
    </PopUpCard>
  );
};

export default FeedbackModal;
