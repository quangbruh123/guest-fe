import React from "react";

const JobItem = ({ jobName, companyName }) => {
  return (
    <div className="col-span-6 cursor-pointer bg-white px-4 hover:bg-blue-200">
      <div className="flex items-center py-4">
        <div className="flex h-full w-[80%] flex-col space-y-2">
          <span className="w-[90%] overflow-hidden text-2xl font-medium">
            Senior Frontend Developer
          </span>
          <span className="text-gray-400">TMA Solutions</span>
          <span>Lương: 20.000.000VND - 40.000.000VND</span>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
