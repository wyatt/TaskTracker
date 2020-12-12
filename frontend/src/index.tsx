import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/main.css";
import { fetcher } from "./core/mutations";
import { SWRConfig } from "swr";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher, refreshInterval: 50000 }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root"),
);
