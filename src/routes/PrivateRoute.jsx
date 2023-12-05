import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const local =
    window.localStorage.getItem("persist:user") &&
    JSON.parse(window.localStorage.getItem("persist:user"));

  const token = local.accessToken;
  return token ? children : <Navigate to="/dang-nhap" replace></Navigate>;
};

export default PrivateRoute;
