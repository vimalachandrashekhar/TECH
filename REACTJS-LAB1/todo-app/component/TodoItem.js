import React from "react";

const TodoItem = ({ task, completed, toggleCompleted }) => {
  return (
    <div className="todo-item" onClick={toggleCompleted}>
      <input type="checkbox" checked={completed} readOnly />
      <span className={completed ? "completed" : null}>{task}</span>
    </div>
  );
};

export default TodoItem;
