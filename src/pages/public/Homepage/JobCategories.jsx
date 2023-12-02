import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const JobCategories = ({ jobName, jobCount, jobImg }) => {
  return (
    <div className="col-span-4 mb-5 overflow-hidden px-3">
      <div className="w-full">
        <img
          src="https://sieuthivieclam.vn/images/category/cokhi.jpg"
          alt={jobName}
          className="w-[100%]"
        />
      </div>
      <span className="block w-full bg-white px-2 py-4 text-center">
        <span className="overflow-hidden">{jobName}</span>
        <br></br>
        <span>( {jobCount || 6} công việc )</span>
      </span>
    </div>
  );
};

JobCategories.propTypes = {
  jobName: PropTypes.string,
  jobCount: PropTypes.number,
  jobImg: PropTypes.string,
};

export default JobCategories;
