import React, { useState } from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./RequestModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import GeneralButton from "../../AssistantFeatures/GeneralButton/GeneralButton";

const SingleField = (props) => {
  return (
    <div className={`singleField ${props.ClassName}`}>
      <header className="singleField-subheader">{props.subheader}</header>
      <input className="singleField-input" />
    </div>
  );
};

const RequestModal = (props) => {
  const [timeValue, setTimeValue] = useState("5 Minutes");
  const [latValue, setLatValue] = useState(null);
  const [lngValue, setLngValue] = useState(null);
  const [locationState, setLocationState] = useState("");

  const timeValueHandler = (event) => {
    setTimeValue(event.target.value);
  };

  const locationValueHandler = (event) => {
    setLocationState(event.target.value);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatValue(position.coords.latitude);
      setLngValue(position.coords.longitude);
    });
  };

  getLocation();
  const locationValue = { lat: latValue, lng: lngValue };

  const requestSubmit = (event) => {
    event.preventDefault();
    const request = {
      requestId: Math.floor(Math.random() * 100),
      title: event.target[0].value,
      description: event.target[1].value,
      timeNeeded: event.target[2].value,
      location: locationValue, //fix this to grab from event.target instead of hardcode
    };
    props.setHelpRequests((prevState) => [...prevState, request]);
  };

  return (
    <PopUpCard className="request-popup">
      <header className="request-header">
        <h2>Create A Request</h2>
        <CloseModal onClick={props.hideRequestHandler} className="closemodal" />
      </header>
      <hr />
      <form
        className="request-content"
        // onSubmit={requestSubmit & props.hideRequestHandler}
        onSubmit={requestSubmit}
      >
        <SingleField subheader="Title" />
        <SingleField subheader="Description" />
        <div className="singleField">
          <header className="singleField-subheader">Time Required</header>
          <select
            value={timeValue}
            className="time-required-dropdown"
            onChange={timeValueHandler}
          >
            <option value="5 minutes">5 Minutes</option>
            <option value="10 minutes">10 Minutes</option>
            <option value="15 minutes">15 Minutes</option>
            <option value="20 minutes">20 Minutes</option>
            <option value="30 minutes">30 Minutes</option>
          </select>
          <input
            className="singleField-input time-input"
            placeholder="Custom"
            onChange={timeValueHandler}
          />
        </div>
        <div className="singleField">
          <header className="singleField-subheader">Location</header>
          <select
            value={locationState}
            onChange={locationValueHandler}
            className="location-dropdown"
          >
            <option value={locationState}>Use Current Location</option>
            <option value={locationState}>Input Custom Location</option>
          </select>
        </div>
        <GeneralButton
          buttonTitle="Post"
          className="post-button"
          type="submit"
        />
      </form>
      <br />
      <br />
    </PopUpCard>
  );
};

export default RequestModal;
