import React, { useState } from "react";

import "./AddTask.css";
import PriorityButtons from "../../FilterFeatures/PriorityButtons/PriorityButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTask = (props) => {
  const [inputText, setInputText] = useState("");

  const [isClicked, setClick] = useState({
    isHiPriChecked: false,
    isMedPriChecked: false,
    isLowPriChecked: false,
  });

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      return -1;
    }

    const newTask = {
      //error here
      id: Math.floor(Math.random() * 30).toString(), //fix the id to be incremental
      text: inputText,
      completed: false,
      priority: "Low",
    };

    if (isClicked.isHiPriChecked) {
      props.onAddNewHiTask(newTask);
      newTask.priority = "High";
    } else if (isClicked.isMedPriChecked) {
      props.onAddNewMedTask(newTask);
      newTask.priority = "Medium";
    } else {
      props.onAddNewLowTask(newTask);
    }

    setInputText("");
  };

  const inputTextHandler = (event) => {
    setInputText(event.target.value);
    //event.target.value returns the text that is inputted in the form
  };

  return (
    <form className="add-task" onSubmit={addTaskHandler}>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        placeholder="Bullet Your Goals"
      />
      <button type="submit" className="add-task-button">
        <FontAwesomeIcon className="faicons" icon="plus" />
      </button>
      <PriorityButtons isClicked={isClicked} setClick={setClick} />
    </form>
  );
};

export default AddTask;
