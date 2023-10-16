import React from "react";
import { NavLink } from "react-router-dom";
import JobItem from "./JobItem";

import Navbar from "../../../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll bg-slate-100">
      <img
        src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/banner-top.jpg"
        alt=""
        className="h-full w-full"
      ></img>

      {/* body */}
      <div className="h-[1000px]">
        <div className="mx-auto mt-3 w-[85rem]">
          <h2 className="mb-8 text-2xl leading-7">VIỆC THEO NGÀNH NGHỀ</h2>
          <div className="ml-[-15px] mr-[-15px] w-[100%]">
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
          </div>
        </div>
      </div>

      {/* footer */}
      <div></div>
    </div>
  );
};

export default Homepage;
