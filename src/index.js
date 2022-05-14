import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./routes/routes";
import "./global/style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
