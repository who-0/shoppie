import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider as AppProvider } from "./contexts/AppContexts";

const html = document.getElementById("root");
const root = ReactDom.createRoot(html);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
