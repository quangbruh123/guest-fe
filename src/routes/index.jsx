import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Homepage from "../pages/public/Homepage/Homepage";
import Jobpage from "../pages/public/Jobpage/Jobpage";
import News from "../pages/public/News";
import Companies from "../pages/public/Companies";

import PublicLayout from "../layouts/publicLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<Homepage />}></Route>
      <Route path="news" element={<News />}></Route>
      <Route path="cong-ty" element={<Companies />}></Route>
      <Route path="jobs" element={<Jobpage></Jobpage>}></Route>
    </Route>,
  ),
);

export default router;
