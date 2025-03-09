import React from "react";
import "../styles/Dashboard.css"; // Ensure CSS is linked

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Overview Section */}
      <div className="dashboard-overview">
        <div className="stat-card">
          <h3>Projects</h3>
          <p>10 Active</p>
        </div>
        <div className="stat-card">
          <h3>Tasks</h3>
          <p>24 Pending</p>
        </div>
        <div className="stat-card">
          <h3>Team Members</h3>
          <p>8 Active</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>✅ Task "Design UI" completed</li>
          <li>🆕 New project "Marketing Campaign" added</li>
          <li>🔧 Task "Bug Fixes" updated</li>
        </ul>
      </div>
    </div>
  );
}
