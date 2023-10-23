import { Navigate } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/public/Homepage/Homepage";
import News from "../pages/public/News";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/homepage" replace />,
      },
      {
        path: "homepage",
        name: "Homepage",
        element: <Homepage></Homepage>,
        children: [{}],
      },
      {
        path: "news",
        name: "Tin tức",
        element: <News></News>,
      },
    ],
  },
];
