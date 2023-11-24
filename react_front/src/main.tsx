// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyApp from "./components/MyApp";

const rootElement = document.getElementById("root");
rootElement &&
  createRoot(rootElement).render(
    <React.StrictMode>
      <MyApp />
    </React.StrictMode>
  );
