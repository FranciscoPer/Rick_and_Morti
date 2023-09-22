import React from "react";

import "./main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
const root = document.getElementById("root");


// Utiliza createRoot para inicializar la aplicación

const rootElement = createRoot(root);
rootElement.render(

  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
