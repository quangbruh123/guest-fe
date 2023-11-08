import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faList,
  faLocationDot,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import JobItem from "../../../Components/JobItem";

const Jobpage = () => {
  return (
    <div className="block">
      <div className="m-auto w-[70rem]">
        <div className="mx-auto mb-12 flex justify-between">
          <div className="flex w-[85%] space-x-2">
            <div className="flex w-[15rem] items-center pr-4">
              <span className="text-2xl font-medium">Tìm việc nhanh</span>
            </div>
            <div className="flex w-[40%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 px-2">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              <input
                type="text"
                placeholder="Nhập tên công việc"
                className="outline-none"
              ></input>
            </div>
            <div className="flex w-[30%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 px-2">
              <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              <select
                placeholder="Chọn ngành nghề"
                className="flex h-full w-full cursor-pointer items-center outline-none"
              >
                <option>Chọn ngành nghề</option>
              </select>
            </div>
            <div className="flex w-[30%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 px-2">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <select
                placeholder="Chọn địa điểm"
                className="flex h-full w-full cursor-pointer items-center outline-none"
              >
                <option>Chọn địa điểm</option>
              </select>
            </div>
          </div>
          <div className="rounded-[4px] bg-[#0B6FBA] px-8 py-3 font-medium text-white hover:bg-[#095e9b]">
            <button>Tìm ngay</button>
          </div>
        </div>

        <div className="mx-auto flex space-x-2">
          <div className="w-[70%] pr-2">
            <div className="flex items-center justify-between border-[1px] border-slate-300 p-4">
              <span>Bind số lượng tại đây</span>
              <div className="flex items-center">
                <span className="mr-2 text-slate-500">Sắp xếp theo:</span>
                <select className="rounded-md border-[1px] border-slate-300 p-1 text-slate-500">
                  <option>Mới nhất</option>
                  <option>Lương giảm dần</option>
                </select>
              </div>
            </div>

            <div>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
              <JobItem></JobItem>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="border-[1px] border-gray-300 bg-white">
              <h2 className="border-b-[1px] border-gray-300 px-7 py-4 text-lg font-bold">
                DANH MỤC
              </h2>
              <div></div>
              <div className="px-7">
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>NGÀNH NGHỀ</span>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>ĐỊA ĐIỂM</span>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>MỨC LƯƠNG</span>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>TRÌNH ĐỘ</span>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span>HÌNH THỨC LÀM VIỆC</span>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobpage;
