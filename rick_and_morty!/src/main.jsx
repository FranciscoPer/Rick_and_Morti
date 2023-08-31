import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from 'react-redux';
const root = document.getElementById("root");


// Utiliza createRoot para inicializar la aplicación

const rootElement = ReactDOM.createRoot(root);
rootElement.render(

  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
