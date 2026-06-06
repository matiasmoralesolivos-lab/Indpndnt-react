import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StudioProvider from "./context/StudioContext";
import "./styles/studio.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StudioProvider>
    <App />
  </StudioProvider>
);