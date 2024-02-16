import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <div className="mt-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mt-8">
          <button className="w-full py-2 px-3 bg-gray-800 text-white rounded hover:bg-blue-400">
            Sign Up
          </button>
        </div>
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
