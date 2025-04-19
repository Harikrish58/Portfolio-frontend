// Import necessary modules and assets
import React, { useEffect } from "react";
import PageNotFoundImage from "../assets/Error404.png";
import { Link, useNavigate } from "react-router-dom";

// PageNotFound component handles invalid or undefined routes
const PageNotFound = () => {
  const navigate = useNavigate();

  // Auto-redirect user to the homepage after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clear timeout if component unmounts before 3 seconds
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gray-900">
      {/* Error image */}
      <img
        src={PageNotFoundImage}
        alt="404 Page Not Found"
        className="w-full max-w-md md:max-w-lg mb-8"
      />

      {/* Error message */}
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Manual navigation link to return to home */}
      <Link
        to="/"
        className="mt-4 text-blue-600 dark:text-blue-400 underline font-medium"
      >
        Go back home
      </Link>
    </div>
  );
};

export default PageNotFound;
