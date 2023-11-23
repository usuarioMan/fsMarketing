// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyApp from "./components/myApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </React.StrictMode>
);
