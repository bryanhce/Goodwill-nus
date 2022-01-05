import React from "react";

import "./RemoveTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemoveTask = ({ todos, setTodos, singleTodo }) => {
  const removeHandler = () => {
    setTodos(todos.filter((task) => task.id !== singleTodo.id));
  };

  return (
    <div className="removeButton" onClick={removeHandler}>
      <span>
        <FontAwesomeIcon className="faicons" icon="times" />
      </span>
    </div>
  );
};

export default RemoveTask;
