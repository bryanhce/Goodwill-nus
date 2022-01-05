import React, { Fragment } from "react";
import "./AddTaskModal.css";
import ReactDOM from "react-dom";
import PopUpCard from "../../AssistantFeatures/PopUpCard/PopUpCard";
import AddTask from "../AddTask/AddTask";
import CloseModal from "../../AssistantFeatures/CloseModal/CloseModal";
import Backdrop from "../../AssistantFeatures/Backdrop/Backdrop";

const AddTaskCard = (props) => {
  return (
    <PopUpCard className="addTask-popup">
      <header className="addTask-header">
        <h2>Goals for the Day</h2>
        <CloseModal
          onClick={props.onCloseAddTaskPopUp}
          className="closemodal"
        />
      </header>
      <hr />
      <AddTask
        onAddNewHiTask={props.onAddNewHiTask}
        onAddNewMedTask={props.onAddNewMedTask}
        onAddNewLowTask={props.onAddNewLowTask}
        onCloseAddTaskPopUp={props.onCloseAddTaskPopUp}
      />
    </PopUpCard>
  );
};

const AddTaskModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseAddTaskPopUp} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddTaskCard
          onCloseAddTaskPopUp={props.onCloseAddTaskPopUp}
          onAddNewHiTask={props.onAddNewHiTask}
          onAddNewMedTask={props.onAddNewMedTask}
          onAddNewLowTask={props.onAddNewLowTask}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddTaskModal;
