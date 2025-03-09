import React from "react";
import "../styles/Home.css"; // Ensure CSS is linked

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Project Management Tool</h1>
          <p>Plan, Track, and Collaborate on Your Projects with Ease.</p>

          {/* Enhanced Call to Action Button */}
          <a href="/dashboard" className="cta-button">Get Started</a>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h3>📁 Manage Projects</h3>
          <p>Create and organize your projects effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3>📋 Track Tasks</h3>
          <p>Assign and monitor tasks for better productivity.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Collaborate</h3>
          <p>Work with your team and achieve goals faster.</p>
        </div>
      </div>
    </div>
  );
}
