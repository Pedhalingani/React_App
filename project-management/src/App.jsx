import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute"; // ✅ Import PrivateRoute

import "./App.css"; // ✅ Keep CSS import at the end

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar /> {/* ✅ Ensure Navbar is always visible */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ Protect routes using PrivateRoute */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/file-upload" element={<FileUpload />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
