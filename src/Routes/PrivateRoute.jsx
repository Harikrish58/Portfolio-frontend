// Import React and Navigate from React Router
import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute component is used to protect routes from unauthorized access
const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated as admin using localStorage
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // If authenticated, render the protected child component
  // Otherwise, redirect the user to the home page
  return isAdmin ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
