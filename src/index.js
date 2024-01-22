import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./context/ContactContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </BrowserRouter>
);
