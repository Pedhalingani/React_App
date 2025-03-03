import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <h1 className="text-4xl font-bold">Welcome to the Project Management Tool</h1>
      <p className="mt-4 text-lg">Manage your projects efficiently!</p>
      <Link
        to="/dashboard"
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Get Started
      </Link>
    </div>
  );
}

  