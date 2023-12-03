import React from "react";

const JobDetailItem = () => {
  return (
    <div className="border-b-[1px] border-gray-300 px-4 py-5">
      <span className="cursor-pointer text-sm font-medium text-blue-700 hover:underline">
        BIND TÊN CÔNG VIỆC
      </span>
      <div className="mt-3 flex items-center">
        <div className="w-[30%]">
          <img src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/avatar.jpg"></img>
        </div>
        <div className="w-[70%] space-y-2 pl-2">
          <span className="text-xs">BIND TÊN CÔNG TY</span>
          <div className="flex items-center space-x-2 text-xs">
            <i className="fa-solid fa-location-dot"></i>
            <span className="">bind tên tỉnh thành</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <i className="fa-solid fa-coins"></i>
            <span className="">bind lương</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailItem;
