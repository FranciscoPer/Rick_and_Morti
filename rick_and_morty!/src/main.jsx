import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

// Utiliza createRoot para inicializar la aplicación
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
