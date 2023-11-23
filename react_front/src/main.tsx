// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyApp from "./components/myApp";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
rootElement &&
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </React.StrictMode>
  );
