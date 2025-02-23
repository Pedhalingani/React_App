import "bootstrap/dist/css/bootstrap.min.css";  // ✅ Import Bootstrap CSS
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Teams from "./pages/Teams";
import { ProjectContext } from "./context/ProjectContext";
import Login from "./pages/Login";
import FileUpload from "./components/FileUpload";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Navbar/>
    <Dashboard/>
    <Home/>
    <Projects/>
    <Tasks/>
    <Teams/>
    <Login/>
    <ProjectContext/>
    <FileUpload/>


  </BrowserRouter>
);

