import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  return token ? children : <Navigate to="/dang-nhap" replace></Navigate>;
};

export default PrivateRoute;
