// Import React and required routing components
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import page and component routes
import Home from "../Pages/Home";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminLogin from "../Components/AdminLogin";
import PageNotFound from "../Pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";

// AppRoutes component defines all frontend routes in the application
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route: Home page */}
      <Route path="/" element={<Home />} />

      {/* Protected route: Admin Login - only accessible if marked as admin */}
      <Route
        path="/admin/login"
        element={
          <PrivateRoute>
            <AdminLogin />
          </PrivateRoute>
        }
      />

      {/* Protected route: Admin Dashboard - only accessible after login */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* Catch-all route: Shows 404 page for undefined routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
