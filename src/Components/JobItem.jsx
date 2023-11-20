import React from "react";
import { useNavigate } from "react-router-dom";

const JobItem = () => {
  const navigate = useNavigate();
  return (
    <div className="my-2 flex w-[100%] border-[1px] border-slate-300 bg-white p-4">
      <div className="w-[20%]">
        <img src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/avatar.jpg"></img>
      </div>
      <div className="ml-3 flex w-[80%] flex-col">
        <span
          className="mb-3 cursor-pointer font-medium text-blue-700 hover:underline"
          onClick={() => navigate("/jobs/detail")}
        >
          BẢO VỆ GIỮ XE (CA ĐÊM) (GOI CTV)
        </span>
        <span className="mb-5 cursor-pointer hover:underline">
          CTY TNHH MỸ PHẨM MIRA
        </span>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Lương: 8.000.000</span>
          <div className="flex items-center space-x-2">
            <i class="fa-solid fa-location-dot text-gray-500"></i>
            <span className="text-slate-500">Hồ Chí Minh</span>
          </div>
          <div className="flex items-center space-x-2">
            <i class="fa-solid fa-clock text-gray-500"></i>
            <span className="text-slate-500">Hạn nộp: 30/11/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
