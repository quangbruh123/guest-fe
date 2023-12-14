import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAccessToken } from "../store/authReducer";

const PrivateRoute = ({ children }) => {
  const token = useSelector(getAccessToken);
  return token ? children : <Navigate to="/dang-nhap"></Navigate>;
};

export default PrivateRoute;
