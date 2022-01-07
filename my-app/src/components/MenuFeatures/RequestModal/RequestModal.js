import React, { useState } from "react";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import "./RequestModal.css";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import GeneralButton from "../../AssistantFeatures/GeneralButton/GeneralButton";

import geocode from "../../../utils/geocode.js";

const SingleField = (props) => {
  return (
    <div className={`singleField ${props.ClassName}`}>
      <header className="singleField-subheader">{props.subheader}</header>
      <input className="singleField-input" />
    </div>
  );
};

const RequestModal = (props) => {
  const [latValue, setLatValue] = useState(null);
  const [lngValue, setLngValue] = useState(null);
  const [activeElementTypeTime, setActiveElementTypeTime] =
    useState("dropdown");
  const [activeElementTypeLoc, setActiveElementTypeLoc] = useState("dropdown");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatValue(position.coords.latitude);
      setLngValue(position.coords.longitude);
    });
  };

  const dropdownTimeCustom = (e) => {
    if (e.target.value === "custom") {
      setActiveElementTypeTime("input");
    }
  };

  const dropdownTimeComp = () => {
    return (
      <select
        onChange={(e) => dropdownTimeCustom(e)}
        className="time-required-dropdown"
      >
        <option value="5 Minutes">5 Minutes</option>
        <option value="10 Minutes">10 Minutes</option>
        <option value="15 Minutes">15 Minutes</option>
        <option value="custom">Custom</option>
      </select>
    );
  };

  const dropdownLocCustom = (e) => {
    if (e.target.value === "custom") {
      setActiveElementTypeLoc("input");
    } else if (e.target.value === "current") {
      getLocation();
    }
  };

  const dropdownLocComp = () => {
    return (
      <select
        onChange={(e) => dropdownLocCustom(e)}
        className="time-required-dropdown"
      >
        <option value="current">Use Current Location</option>
        <option value="custom">Input Custom Location</option>
      </select>
    );
  };

  const inputFieldComp = () => {
    return <input className="singleField-input" placeholder="Custom" />;
  };

  getLocation();
  var locationValue = { lat: latValue, lng: lngValue };

  async function requestSubmit(event) {
    event.preventDefault();
    if (event.target[3].value !== "current") {
      geocode(event.target[3].value, (error, { latitude, longitude } = {}) => {
        if (error) {
          //set to utown if error
          setLatValue(1.3062703);
          setLngValue(103.771012);
        } else {
          setLatValue(latValue => latitude);
          setLngValue(lngValue => longitude);
        }
        locationValue = { lat: latValue, lng: lngValue };
        console.log(locationValue);
      });
      setTimeout(() => {
        locationValue = { lat: latValue, lng: lngValue };
        const request = {
          requestId: Math.floor(Math.random() * 100),
          title: event.target[0].value,
          description: event.target[1].value,
          timeNeeded: event.target[2].value,
          location: locationValue,
        };
        console.log(request);
        props.setHelpRequests((prevState) => [...prevState, request]);
      }, 5000);
      // geocode(event.target[3].value, () => {});
      // locationValue = event.target[3].value;
    }
  }

  return (
    <PopUpCard className="request-popup">
      <header className="request-header">
        <h2>Create A Request</h2>
        <CloseModal onClick={props.hideRequestHandler} className="closemodal" />
      </header>
      <hr />
      <form className="request-content" onSubmit={requestSubmit}>
        <SingleField subheader="Title" />
        <SingleField subheader="Description" />
        <div className="singleField">
          <header className="singleField-subheader">Time Required</header>
          {activeElementTypeTime === "dropdown"
            ? dropdownTimeComp()
            : inputFieldComp()}
        </div>
        <div className="singleField">
          <header className="singleField-subheader">Location</header>
          {activeElementTypeLoc === "dropdown"
            ? dropdownLocComp()
            : inputFieldComp()}
        </div>
        <GeneralButton
          buttonTitle="Post"
          className="post-button"
          type="submit"
          // onClick={props.hideRequestHandler}
        />
      </form>
      <br />
      <br />
    </PopUpCard>
  );
};

export default RequestModal;
