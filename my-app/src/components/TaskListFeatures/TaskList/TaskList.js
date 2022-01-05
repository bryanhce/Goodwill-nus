import React from "react";
import "./TaskList.css";
import SingleTask from "../SingleTask/SingleTask";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.filteredTodos.map((task) => (
        <SingleTask
          text={task.text}
          id={task.id}
          todos={props.todos}
          setTodos={props.setTodos}
          singleTodo={task}
        />
      ))}
    </ul>
  );
};
// for the items being passed down to single task, probably a better way to do it
//add the feature to edit the text

export default TaskList;
