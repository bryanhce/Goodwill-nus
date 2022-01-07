import React, { useState } from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./ProfileModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import img from "../../../images/blackwidow.webp";
import GeneralButton from "../../AssistantFeatures/GeneralButton/GeneralButton";

const ProgressModal = (props) => {
  const [userProfile, setUserProfile] = useState({
    name: "Scarlette",
    email: "scarlette.johansson@gmail.com",
    image: img,
    extended: 28,
    received: 9,
  });

  return (
    <PopUpCard className="progress-popup">
      <header className="progress-header">
        <h2>Profile</h2>
        <CloseModal onClick={props.hideProfileHandler} className="closemodal" />
      </header>
      <hr />
      <div className="profile-content">
        <div className="profile-image-container">
          <img className="profile-image" src={userProfile.image} />
        </div>
        <span className="profile-name">
          <strong>{userProfile.name}</strong>
        </span>
        <span className="profile-email">{userProfile.email}</span>
        <span className="profile-extended">
          Extended <strong>{userProfile.extended}</strong> helping hands
        </span>
        <span className="profile-received">
          Received <strong>{userProfile.received}</strong> helping hands
        </span>
      </div>
      <br /> <br />
      <GeneralButton buttonTitle="Edit" />
      <br /> <br /> <br /> <br />
    </PopUpCard>
  );
};

export default ProgressModal;
