import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { routes } from "./routes/index.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const route_instance = routes.map((route, index) => {
  return {
    path: route.path,
    element: route.element,
    children: route.children,
  };
});

const router = createBrowserRouter(route_instance);

console.log(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
