// Import StrictMode for highlighting potential problems in an application
import { StrictMode } from "react";

// Import createRoot for modern React 18 root rendering
import { createRoot } from "react-dom/client";

// Import global styles and the main App component
import "./index.css";
import App from "./App.jsx";

// Mount the root React component (`App`) into the HTML element with id="root"
// StrictMode is a development tool that helps identify issues early
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
