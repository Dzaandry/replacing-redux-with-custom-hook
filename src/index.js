import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import configureProductsStore from "./hooks-store/products-store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

configureProductsStore();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
