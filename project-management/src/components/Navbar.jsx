import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Project Management</h1>
      <div>
        <Link className="px-4" to="/">Home</Link>
        <Link className="px-4" to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}