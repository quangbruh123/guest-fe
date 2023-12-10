import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const JobItem = ({
  jobName,
  companyName,
  salaryMax,
  salaryMin,
  endDate,
  pid,
  image,
}) => {
  const navigate = useNavigate();
  let salaryOutput;
  if (!salaryMax && !salaryMin) {
    salaryOutput = "Thoả thuận";
  } else if (!salaryMax && salaryMin) {
    salaryOutput = `từ ${salaryMin}`;
  } else if (!salaryMin && salaryMax) {
    salaryOutput = `tối đa ${salaryMax}`;
  } else {
    salaryOutput = `từ ${salaryMin} đến ${salaryMax}`;
  }
  return (
    <div className="my-2 flex w-[100%] border-[1px] border-slate-300 bg-white p-4">
      <div className="h-[110px] w-[20%]">
        <img src={image} className="h-[100%] w-[100%] object-contain"></img>
      </div>
      <div className="ml-3 flex w-[80%] flex-col">
        <span
          className="mb-3 cursor-pointer font-medium text-blue-700 hover:underline"
          onClick={() => navigate(`/jobs/detail/${pid}`)}
        >
          {jobName}
        </span>
        <span className="mb-5 cursor-pointer hover:underline">
          {companyName}
        </span>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Lương: {salaryOutput}</span>
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-clock text-gray-500"></i>
            <span className="text-slate-500">
              Hạn nộp: {endDate.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  jobName: PropTypes.string,
  companyName: PropTypes.string,
  salaryMax: PropTypes.number,
  salaryMin: PropTypes.number,
  endDate: PropTypes.object,
  pid: PropTypes.string,
};

export default JobItem;
