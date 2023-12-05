import React, { useState } from "react";

import JobItem from "../../../Components/JobItem";
import SelectCustom from "../../../Components/Select";
import { useSelector } from "react-redux";
import { getStaticData } from "../../../store/staticData";
import useFetchData from "../../../utils/useFetchData";

const Jobpage = () => {
  const staticData = useSelector(getStaticData);

  const [query, setQuery] = useState({});
  const { data, isLoading, error } = useFetchData("/post/filter", query);
  const [jobTitle, setJobTitle] = useState("");
  const [careerObject, setCareerObject] = useState(null);

  const handleSearch = () => {
    setQuery({
      jobTitle: jobTitle,
      careerId: careerObject?.value,
    });
  };

  return (
    <div className="block">
      <div className="m-auto w-[70rem]">
        <div className="mx-auto mb-12 flex justify-between">
          <div className="flex w-[85%] space-x-2">
            <div className="flex w-[15rem] items-center pr-4">
              <span className="text-2xl font-medium">Tìm việc nhanh</span>
            </div>
            <div className="flex w-[40%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 bg-white px-2">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Nhập tên công việc"
                className="outline-none"
                name="jobTitle"
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              ></input>
            </div>

            <SelectCustom
              className=" h-[40px] w-1/3 rounded-[4px] border-[1px] border-gray-400"
              name={"Ngành nghề"}
              select={"Chọn ngành nghề"}
              values={staticData?.careers?.map((el) => {
                return {
                  value: el.id,
                  label: el.careerName,
                };
              })}
              onChange={setCareerObject}
            />
          </div>

          <button
            className="rounded-[4px] bg-[#0B6FBA] px-8 py-2 font-medium text-white hover:bg-[#095e9b]"
            onClick={handleSearch}
          >
            Tìm ngay
          </button>
        </div>

        <div className="mx-auto flex space-x-2">
          <div className="w-[70%] pr-2">
            <div className="flex items-center justify-between border-[1px] border-slate-300 bg-white p-4">
              <span>Bind số lượng tại đây</span>
              <div className="flex items-center">
                <span className="mr-2 text-slate-500">Sắp xếp theo:</span>
                <select className="rounded-md border-[1px] border-slate-300 p-1 text-slate-500">
                  <option>Mới nhất</option>
                  <option>Lương giảm dần</option>
                </select>
              </div>
            </div>

            {data?.map((el) => {
              return (
                <JobItem
                  key={el.id}
                  jobName={el.jobTitle}
                  companyName={el.Company.companyName}
                  salaryMax={el.salaryMax}
                  salaryMin={el.salaryMin}
                  endDate={el.endDate}
                  pid={el.id}
                />
              );
            })}
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
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>ĐỊA ĐIỂM</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>MỨC LƯƠNG</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>TRÌNH ĐỘ</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span>HÌNH THỨC LÀM VIỆC</span>
                  <i className="fa-solid fa-chevron-right"></i>
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
