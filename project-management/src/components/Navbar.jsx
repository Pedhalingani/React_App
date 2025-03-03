import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Project Management</h1>
      <div>
        <NavLink className="px-4" to="/">Home</NavLink>
        <NavLink className="px-4" to="/dashboard">Dashboard</NavLink>
        <button className="ml-4 px-3 py-1 bg-red-500 text-white rounded" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
