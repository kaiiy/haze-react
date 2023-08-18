import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@unocss/reset/normalize.css";
import "virtual:uno.css";
import "./index.css";
import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
