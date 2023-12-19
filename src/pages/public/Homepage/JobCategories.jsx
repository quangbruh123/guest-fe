import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const JobCategories = ({ jobName, careerId, icon }) => {
  const navigate = useNavigate();
  return (
    <div className="col-span-3 overflow-hidden px-3 pb-5">
      <div
        className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-[1px] border-white bg-gray-100 py-6 transition-all hover:border-[1px] hover:border-blue-600 hover:bg-white hover:shadow-xl hover:shadow-blue-100"
        onClick={() => navigate(`/jobs/${careerId}`)}
      >
        <div className="flex w-full justify-center pb-4">
          <i
            className={`${icon} rounded-xl bg-gray-100 p-4 text-7xl text-blue-700`}
          ></i>
        </div>
        <div className="text-lg font-semibold">{jobName}</div>
        <div className="text-blue-600">( công việc )</div>
      </div>
    </div>
  );
};

JobCategories.propTypes = {
  jobName: PropTypes.string,
  careerId: PropTypes.number,
  icon: PropTypes.string,
};

export default JobCategories;
