import React from "react";
import ReactDOM from "react-dom/client";
import { Index } from "./Index.tsx";
import { Stage1 } from "./stages/Stage1.tsx";
import "@unocss/reset/normalize.css";
import "virtual:uno.css";
import "./index.css";
import type { AttributifyAttributes } from "@unocss/preset-attributify";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes { }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "stages/1",
    element: <Stage1 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
