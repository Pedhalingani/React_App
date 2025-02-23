import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const socket = io("http://localhost:5173"); // ✅ Fixed URL (No extra `http:` line)

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("project-updated", (message) => {
      setNotifications((prev) => [...prev, message]);
    });

    return () => {
      socket.off("project-updated"); // Cleanup listener
    };
  }, []);

  return (
    <div>
      {notifications.map((note, index) => (
        <p key={index} className="alert alert-info">{note}</p>
      ))}
    </div>
  );
}

export default App;
