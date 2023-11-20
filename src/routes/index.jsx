import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Homepage from "../pages/public/Homepage/Homepage";
import Jobpage from "../pages/public/Jobpage/Jobpage";
import News from "../pages/public/News";
import Companies from "../pages/public/Company/Companies";
import CompanyDetail from "../pages/public/Company/CompanyDetail";

import PublicLayout from "../layouts/publicLayout";
import JobDetail from "../pages/public/Jobpage/JobDetail";
import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";
import ForgotPassword from "../pages/public/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/public/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/quen-mat-khau"
        element={<ForgotPassword></ForgotPassword>}
      ></Route>
      <Route path="/reset" element={<ResetPassword></ResetPassword>}></Route>
      <Route path="/dang-ky" element={<SignUp></SignUp>}></Route>
      <Route path="/dang-nhap" element={<Login></Login>}></Route>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="cong-ty" element={<Companies />}></Route>
        <Route path="cong-ty/:cid" element={<CompanyDetail />}></Route>
        <Route path="jobs" element={<Jobpage></Jobpage>}></Route>
        <Route path="jobs/detail/" element={<JobDetail></JobDetail>}></Route>
        <Route path="jobs/detail/:id" element={<JobDetail></JobDetail>}></Route>
      </Route>
      <Route path="/tai-khoan" element={<PrivateRoute></PrivateRoute>}>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Route>
    </>,
  ),
);

export default router;
