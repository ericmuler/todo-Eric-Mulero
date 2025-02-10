import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      
      <p className="task-text">
        {task.id}. {task.text}
      </p>

      
      <button
        className="delete-button"
        onClick={() => onDelete(task)}
      >
        Tarea pendiente?
      </button>
    </div>
  );
};

export default Task;