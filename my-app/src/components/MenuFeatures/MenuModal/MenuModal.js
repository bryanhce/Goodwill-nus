import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import "./MenuModal.css";
import Backdrop from "../../AssistantFeatures/Backdrop/Backdrop";
import MenuItem from "../MenuItem/MenuItem";
import ProfileModal from "../ProfileModal/ProfileModal";
import PhilosophyModal from "../PhilosophyModal/PhilosophyModal";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import RequestModal from "../RequestModal/RequestModal";

const Menu = (props) => {
  return (
    <div
      className={`side-menu ${props.isAnyMenuItemVisible() ? "shaded" : ""}`}
    >
      <MenuItem itemName="Request" onClick={props.showRequestHandler} />
      <MenuItem itemName="Profile" onClick={props.showProfileHandler} />
      <MenuItem itemName="Philosophy" onClick={props.showPhilosophyHandler} />
      <MenuItem itemName="Feedback" onClick={props.showFeedbackHandler} />
      <MenuItem itemName="Logout" onClick={props.onCloseMenu} />
    </div>
  );
};

const MenuModal = (props) => {
  //make everything into a single state so that when one menu item opens, the rest closes
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isPhilosophyVisible, setPhilosophyVisible] = useState(false);
  const [isFeedbackVisible, setFeedbackVisible] = useState(false);
  const [isRequestVisible, setRequestVisible] = useState(false);

  const showRequestHandler = () => {
    setRequestVisible(true);
  };

  const hideRequestHandler = () => {
    setRequestVisible(false);
  };

  const showProfileHandler = () => {
    setProfileVisible(true);
  };

  const hideProfileHandler = () => {
    setProfileVisible(false);
  };

  const showPhilosophyHandler = () => {
    setPhilosophyVisible(true);
  };

  const hidePhilosophyHandler = () => {
    setPhilosophyVisible(false);
  };

  const showFeedbackHandler = () => {
    setFeedbackVisible(true);
  };

  const hideFeedbackHandler = () => {
    setFeedbackVisible(false);
  };

  const isAnyMenuItemVisible = () => {
    return (
      isFeedbackVisible ||
      isProfileVisible ||
      isPhilosophyVisible ||
      isRequestVisible
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseMenu} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Menu
          onCloseMenu={props.onCloseMenu}
          showProfileHandler={showProfileHandler}
          showPhilosophyHandler={showPhilosophyHandler}
          showFeedbackHandler={showFeedbackHandler}
          showRequestHandler={showRequestHandler}
          isAnyMenuItemVisible={isAnyMenuItemVisible}
          setHelpRequest={props.setHelpRequest}
        />,
        document.getElementById("overlay-root")
      )}
      {isProfileVisible &&
        ReactDOM.createPortal(
          <ProfileModal hideProfileHandler={hideProfileHandler} />,
          document.getElementById("overlay-root")
        )}
      {isPhilosophyVisible &&
        ReactDOM.createPortal(
          <PhilosophyModal hidePhilosophyHandler={hidePhilosophyHandler} />,
          document.getElementById("overlay-root")
        )}
      {isFeedbackVisible &&
        ReactDOM.createPortal(
          <FeedbackModal hideFeedbackHandler={hideFeedbackHandler} />,
          document.getElementById("overlay-root")
        )}
      {isRequestVisible &&
        ReactDOM.createPortal(
          <RequestModal
            hideRequestHandler={hideRequestHandler}
            setHelpRequests={props.setHelpRequests}
            helpRequests={props.helpRequests}
          />,
          document.getElementById("overlay-root")
        )}
    </Fragment>
  );
};

export default MenuModal;
