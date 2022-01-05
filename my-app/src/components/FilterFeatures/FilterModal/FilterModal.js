import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import Backdrop from "../../AssistantFeatures/Backdrop/Backdrop";
import "./FilterModal.css";

const FilterCard = (props) => {
  const filterHandler = (e) => {
    props.setFilterStatus(e.target.value);
  };

  return (
    <PopUpCard className="filter-popup">
      <header className="filter-header">
        <h2>Filter View</h2>
        <CloseModal onClick={props.onCloseFilterPopUp} className="closemodal" />
      </header>
      <hr />
      <ul>
        <li>
          <button
            className="filter-popup-button"
            onClick={(e) => filterHandler(e) & props.onCloseFilterPopUp()}
            value={"all"}
          >
            All Tasks
          </button>
        </li>
        <li>
          <button
            className="filter-popup-button"
            onClick={(e) => filterHandler(e) & props.onCloseFilterPopUp()}
            value={"completed"}
          >
            Completed Tasks
          </button>
        </li>
        <li>
          <button
            className="filter-popup-button"
            onClick={(e) => filterHandler(e) & props.onCloseFilterPopUp()}
            value={"uncompleted"}
          >
            Uncompleted Tasks
          </button>
        </li>
      </ul>
    </PopUpCard>
  );
};

const FilterModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseFilterPopUp} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <FilterCard
          onCloseFilterPopUp={props.onCloseFilterPopUp}
          setFilterStatus={props.setFilterStatus}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default FilterModal;
