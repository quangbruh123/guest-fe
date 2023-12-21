import React from "react";
import { useNavigate } from "react-router-dom";

const JobDetailItem = ({
  postId,
  jobName,
  salaryMin,
  salaryMax,
  imageLink,
  district,
  companyName,
}) => {
  const navigate = useNavigate();
  let salaryOutput;
  if (!salaryMax && !salaryMin) {
    salaryOutput = "Thoả thuận";
  } else if (!salaryMax && salaryMin) {
    salaryOutput = `từ ${salaryMin} triệu`;
  } else if (!salaryMin && salaryMax) {
    salaryOutput = `tối đa ${salaryMax} triệu`;
  } else {
    salaryOutput = `từ ${salaryMin} đến ${salaryMax} triệu`;
  }
  return (
    <div className="border-b-[1px] border-gray-300 px-4 py-5">
      <span
        className="line-clamp-1 cursor-pointer text-sm font-medium text-blue-700 hover:underline"
        onClick={() => navigate(`../jobs/detail/${postId}`)}
      >
        {jobName}
      </span>
      <div className="mt-3 flex items-center">
        <div className="w-[30%]">
          <img src={imageLink}></img>
        </div>
        <div className="w-[70%] space-y-2 pl-2">
          <span className="line-clamp-1 text-xs">{companyName}</span>
          <div className="flex items-center space-x-2 text-xs">
            <i className="fa-solid fa-location-dot"></i>
            <span className="">{district}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <i className="fa-solid fa-coins"></i>
            <span className="">{salaryOutput}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailItem;
