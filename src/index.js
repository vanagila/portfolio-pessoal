import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { TechsProvider } from "./providers/Techs";

ReactDOM.render(
  <React.StrictMode>
    <TechsProvider>
      <App />
    </TechsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
