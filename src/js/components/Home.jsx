import React, { useState } from "react";
import '../../styles/index.css';
import Task from "./Task.jsx"; 

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: tasks.length + 1,
        text: newTask,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
  };

  return (
    <div className="container">
      <h1 className="app-title">Que tenemos hoy?</h1>
      <div className="task-container">
        
        <input
          type="text"
          className="task-input"
          placeholder="Que tarea deseas añadir?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />

        
        <div className="task-list">
          {tasks.map((task) => (
            <Task
              key={task.id} 
              task={task} 
              onDelete={handleDeleteTask} 
            />
          ))}
        </div>

        
        <div className="task-status">
          <p>
            {tasks.length === 0
              ? "Genial!! No hay tareas, añadir tareas"
              : `${tasks.length} Tarea${tasks.length !== 1 ? "s" : ""} por completar`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;