import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Providers } from "../src/providers/index";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
