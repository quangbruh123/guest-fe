import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { apiGetPostNumber } from "../../../apis/career";

const JobCategories = ({ jobName, careerId, icon }) => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(null);
  useEffect(() => {
    const response = apiGetPostNumber().then((data) => {
      console.log(data);
      setNumber(data.data.categories[careerId - 1].PostCount);
    });
  }, []);
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
        <div className="flex gap-1 text-blue-600">
          <div className="font-semibold">{number}</div>
          <div>công việc</div>
        </div>
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
