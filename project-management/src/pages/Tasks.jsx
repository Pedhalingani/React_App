import React, { useState } from "react";
import "../styles/Tasks.css"; // Ensure CSS file is linked

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Homepage", status: "In Progress" },
    { id: 2, title: "Write API Documentation", status: "Completed" },
    { id: 3, title: "Fix Login Bug", status: "Pending" },
  ]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, title: "New Task", status: "Pending" };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="tasks-container">
      <h1 className="tasks-title">Tasks</h1>

      <button className="add-task-btn" onClick={addTask}>
        + Add Task
      </button>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>Status: <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
