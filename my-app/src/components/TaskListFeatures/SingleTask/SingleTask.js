import React from "react";
import "./SingleTask.css";
import "../RemoveTask/RemoveTask";
import RemoveTask from "../RemoveTask/RemoveTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleTask = (props) => {
  const completedHandler = () => {
    props.setTodos(
      props.todos.map((task) => {
        if (task.id === props.singleTodo.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const updateStateHandler = (e) => {
    props.setTodos(
      props.todos.map((task) => {
        if (task.id === props.singleTodo.id) {
          return {
            ...task,
            text: e.target.value,
          };
        }
        return task;
      })
    );
  };

  return (
    <li key={props.id}>
      <span
        className={`singleTask ${
          props.singleTodo.completed ? "completed" : ""
        }`}
      >
        {/* write the above as such to change css features based on properties */}
        <FontAwesomeIcon
          className="faicons"
          icon={props.singleTodo.completed ? "check-square" : "stop"}
          onClick={completedHandler}
        />
        <textarea
          className="single-task-textarea"
          type="text"
          value={props.text}
          onChange={updateStateHandler}
        />
        <RemoveTask
          setTodos={props.setTodos}
          todos={props.todos}
          singleTodo={props.singleTodo}
        />
      </span>
    </li>
  );
};

export default SingleTask;
