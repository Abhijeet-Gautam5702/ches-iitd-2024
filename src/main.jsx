import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Teams from "./pages/Teams.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
    errorElement: <ErrorPage />,
  },
  {
    path: "teams",
    element: <Teams />,
    children: [],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
