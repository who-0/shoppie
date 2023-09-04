import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider as StyleProvider } from "./contexts/AppContexts";

const html = document.getElementById("root");
const root = ReactDom.createRoot(html);

root.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>
);
