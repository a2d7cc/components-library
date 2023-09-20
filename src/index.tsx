import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";

const router = createBrowserRouter([
  {
    path: "/dropdown",
    element: <DropdownPage />,
  },
  {
    path: "/accordion",
    element: <AccordionPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
