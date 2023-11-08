import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Homepage from "../pages/public/Homepage/Homepage";
import Jobpage from "../pages/public/Jobpage/Jobpage";

const NewsLazy = React.lazy(() => import("../pages/public/News"));

import PublicLayout from "../layouts/publicLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<Homepage />}></Route>
      <Route
        path="news"
        element={
          <React.Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }
          >
            <NewsLazy />
          </React.Suspense>
        }
      ></Route>
      <Route path="jobs" element={<Jobpage></Jobpage>}></Route>
    </Route>,
  ),
);

export default router;
