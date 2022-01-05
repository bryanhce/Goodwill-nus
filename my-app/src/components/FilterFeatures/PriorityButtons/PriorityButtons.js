import React, { Fragment } from "react";

import "./PriorityButtons.css";

const PriorityButtons = ({ isClicked, setClick }) => {
  const hiPriHandler = () => {
    setClick((prevState) => {
      return {
        isHiPriChecked: !prevState.isHiPriChecked,
        isMedPriChecked: false,
        isLowPriChecked: false,
      };
    });
  };

  const medPriHandler = () => {
    setClick((prevState) => {
      return {
        isHiPriChecked: false,
        isMedPriChecked: !prevState.isMedPriChecked,
        isLowPriChecked: false,
      };
    });
  };

  const lowPriHandler = () => {
    setClick((prevState) => {
      return {
        isHiPriChecked: false,
        isMedPriChecked: false,
        isLowPriChecked: !prevState.isLowPriChecked,
      };
    });
  };

  return (
    <Fragment>
      <ul className="priority-buttons-list">
        <li>
          <button
            className={`priority-button ${
              isClicked.isHiPriChecked ? "clicked" : ""
            }`}
            onClick={hiPriHandler}
            type="button"
            // type button prevents the button from submitting the form in addTask
          >
            High Priority
          </button>
        </li>
        <li>
          <button
            className={`priority-button ${
              isClicked.isMedPriChecked ? "clicked" : ""
            }`}
            onClick={medPriHandler}
            type="button"
          >
            Medium Priority
          </button>
        </li>
        <li>
          <button
            className={`priority-button ${
              isClicked.isLowPriChecked ? "clicked" : ""
            }`}
            onClick={lowPriHandler}
            type="button"
          >
            Low Priority
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default PriorityButtons;
