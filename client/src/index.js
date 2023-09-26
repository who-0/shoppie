import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider as AppProvider } from "./contexts/AppContexts";
import { GoogleOAuthProvider } from "@react-oauth/google";

const html = document.getElementById("root");
const root = ReactDom.createRoot(html);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="578576849799-tep2dieo1okobre5viljf3ai5fk5fsi1.apps.googleusercontent.com">
      <AppProvider>
        <App />
      </AppProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
