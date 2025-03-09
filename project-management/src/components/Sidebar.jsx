import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Project Tool</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      {/* Logout Button at the Bottom */}
      <div className="logout-container">
        <Link to="/logout" className="logout-button">Logout</Link>
      </div>
    </div>
  );
}
