import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.scss";
import { StyleProvider } from "./contexts/StylesContext";

const html = document.getElementById("root");
const root = ReactDom.createRoot(html);

root.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>
);
