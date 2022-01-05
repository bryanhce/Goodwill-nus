import React from "react";

import "./TaskCategory.css";
import PriorityHeader from "../PriorityHeader/PriorityHeader";
import TaskList from "../TaskList/TaskList";

const TaskCategory = (props) => {
  return (
    <div className="category">
      <PriorityHeader
        priorityLevel={props.priorityLevel}
        className={props.className}
      />
      <TaskList
        todos={props.todos}
        setTodos={props.setTodos}
        filteredTodos={props.filteredTodos}
      />
    </div>
  );
};

export default TaskCategory;
