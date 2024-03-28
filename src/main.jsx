import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/about/About.jsx";
import Research from "./components/Research/Research.jsx";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification.jsx";
import Project from "./components/projects/Project.jsx";
import Contact from "./components/contact/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import N_L_P from "./Research_Pages/NLP.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/qur",
        element: <Qualification />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/nlp",
        element: <N_L_P />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
