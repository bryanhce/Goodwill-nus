import React from "react";
import "./ResponseModal.css";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import GeneralButton from "../../AssistantFeatures/GeneralButton/GeneralButton";
import img from "../../../images/thorr.jpeg";

const ResponseModal = (props) => {
  const acceptHandler = () => {
    props.request.isAccepted = !props.isAccepted;
    props.hideResponseHandler();
    props.removeAcceptedHandler();
  };

  return (
    <PopUpCard className="response-popup">
      <header className="response-header">
        <h2>Request Details</h2>
        <CloseModal
          onClick={props.hideResponseHandler}
          className="closemodal"
        />
      </header>
      <hr />
      <div className="response-details">
        <div className="response-content">
          <p className="response-content-title">{props.title}</p>
          <h4 className="response-content-description-title">Description:</h4>
          <p className="response-content-description">{props.description}</p>
          <h4 className="response-content-description-title">Time needed:</h4>
          <p className="response-content-description">{props.timeNeeded}</p>
          <h4 className="response-content-description-title">Posted:</h4>
          <p className="response-content-description">30 minutes ago</p>
        </div>
        <div className="issuer-details">
          <div className="issuer-img-container">
            <img
              src={img}
              alt="profile picture of issuer"
              className="issuer-img"
            />
          </div>
          <p className="issuer-name">Chris</p>
          <GeneralButton
            buttonTitle="Accept"
            className="accept-button"
            onClick={acceptHandler}
          />
        </div>
      </div>
    </PopUpCard>
  );
};

export default ResponseModal;
