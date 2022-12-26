import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import AboutPage from "./routes/AboutPage";
import PublicationPage from "./routes/PublicationPage";
import BlogPage from "./routes/BlogPage";
import ProjectPage from "./routes/ProjectPage";
import HomePage from "./routes/HomePage";

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "publications",
        element: <PublicationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
