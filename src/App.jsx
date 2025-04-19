// Import core React and routing utilities
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// Import routing definitions and toast notification component
import AppRoutes from "./Routes/AppRoutes";
import { Toaster } from "react-hot-toast";

// Root App component that wraps the entire application
const App = () => {
  return (
    // Enables routing using React Router
    <BrowserRouter>
      {/* Defines all route-based views of the application */}
      <AppRoutes />

      {/* Global toast notification system (e.g., for success/error messages) */}
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
