// Import necessary libraries and hooks
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// AdminLogin component for handling admin authentication
const AdminLogin = () => {
  // Local state for storing username and password input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Navigation hook for redirecting after successful login
  const navigate = useNavigate();

  // Function to handle form submission and login logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login credentials to backend API
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        { username, password }
      );

      // Extract token from response and store it in localStorage
      const { token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", "true");

      // Show success toast and redirect to admin dashboard
      toast.success("Login successful");
      navigate("/admin");
    } catch (error) {
      // Show error message if login fails
      toast.error(
        error.response?.data?.message || "Login failed. Please try again"
      );
    }
  };

  // JSX UI for the admin login form
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
      >
        {/* Form heading */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Admin Login
        </h2>

        {/* Username input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
