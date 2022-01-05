import React from "react";
import "./AddTaskIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTaskIcon = (props) => {
  return (
    <div onClick={props.onShowAddNewTaskHandler}>
      <FontAwesomeIcon className="faicons plus" icon="plus" />
    </div>
  );
};

export default AddTaskIcon;
