import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Teams from "./pages/Teams.jsx";
import Blogs from "./pages/Blogs.jsx";
import Interviews from "./pages/Interviews.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Teams />,
    children: [],
    errorElement: <ErrorPage />,
  },
  {
    path: "blogs",
    element: <Blogs />,
    children: [],
    errorElement: <ErrorPage />,
  },
  {
    path: "interviews",
    element: <Interviews />,
    children: [],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
