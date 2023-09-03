import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { AppProvider } from "./contexts/appContext";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
