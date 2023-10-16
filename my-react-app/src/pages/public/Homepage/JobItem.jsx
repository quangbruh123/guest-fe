import React from "react";
import { NavLink } from "react-router-dom";

const JobItem = ({ jobName, jobCount, jobImg }) => {
  return (
    <div className="float-left mb-5 w-[25%] overflow-hidden px-3">
      <div className="w-full">
        <img
          src="https://sieuthivieclam.vn/images/category/cokhi.jpg"
          alt="Cơ khí - Kỹ thuật ứng dụng - Tự động hóa"
          className="w-[100%]"
        />
      </div>
      <span className="block w-full bg-white px-2 py-4 text-center">
        <span className="overflow-hidden">{jobName}</span>
        <br></br>
        <span>( {jobCount} công việc )</span>
      </span>
      <div></div>
    </div>
  );
};

export default JobItem;
