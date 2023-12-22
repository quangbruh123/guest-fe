import React from "react";
import { useNavigate } from "react-router-dom";

const RelateJob = ({
  jobTitle,
  imageLink,
  salaryMin,
  salaryMax,
  district,
  companyName,
  id,
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
    <div className="col-span-4 cursor-pointer overflow-hidden px-3 pb-5">
      <div className="rounded-lg bg-white px-6 py-4">
        <div className="flex gap-3">
          <div className="h-[80px] w-[80px]">
            <img
              src={imageLink}
              className="h-[100%] w-[100%] object-contain"
            ></img>
          </div>
          <div className="">
            <div
              className="mb-1 line-clamp-1 cursor-pointer font-semibold hover:underline"
              onClick={() => navigate(`/jobs/detail/${id}`)}
            >
              {jobTitle}
            </div>
            <div className="mb-3 line-clamp-1 font-semibold text-[#6F7882]">
              {companyName}
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gray-200 px-2 py-1 text-sm font-medium text-[#212F3F]">
                {salaryOutput}
              </div>
              <div className="rounded-lg bg-gray-200 px-2 py-1 text-sm font-medium text-[#212F3F]">
                {district}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelateJob;
