import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import JobItem from "../../../Components/JobItem";
import SelectCustom from "../../../Components/Select";
import { getStaticData } from "../../../store/staticData";
import useFetchData from "../../../utils/useFetchData";
import { SalaryMin } from "./postQuery";
import { useParams, useSearchParams } from "react-router-dom";

const Jobpage = () => {
  const { id } = useParams();
  const staticData = useSelector(getStaticData);

  let [searchParams, setSearchParams] = useSearchParams();

  // Query để lấy dữ liệu post
  const [query, setQuery] = useState({
    jobTitle: "",
    careerId: id ? id : "",
    salaryMin: null,
    workingTypeId: null,
    positionId: null,
  });

  // Phần data post fetch về từ database
  const { data, isLoading, error } = useFetchData("/post/filter", query);
  const { post, totalPages } = data;
  // Các thành phần của state query trên
  const [jobTitle, setJobTitle] = useState("");
  const [careerObject, setCareerObject] = useState(null);

  // Các state lưu trữ danh sách danh mục lọc
  const [salaryMinList, setSalaryMinList] = useState([]);
  const [workingTypeList, setWorkingTypeList] = useState([]);
  const [positionList, setPositionList] = useState([]);

  // Các state quản lý trạng thái đóng mở của các danh mục
  const [salaryToggle, setSalaryToggle] = useState(false);
  const [workingTypeToggle, setWorkingTypeToggle] = useState(false);
  const [positionToggle, setPositionToggle] = useState(false);

  const handleSearch = () => {
    setQuery((prev) => ({
      ...prev,
      jobTitle: jobTitle,
      careerId: careerObject?.value,
    }));
  };

  useEffect(() => {
    var workingTpye_temp = [];
    var salaryMin_temp = [];
    var position_temp = [];

    // Gắn dữ liệu cho working type list
    staticData?.workingTypes?.map((el, idx) => {
      const temp = {
        id: el.id,
        workingTypeName: el.workingTypeName,
        checked: false,
      };
      workingTpye_temp.push(temp);
    });
    setWorkingTypeList(workingTpye_temp);

    console.log(staticData?.positions);
    staticData?.positions?.map((el, idx) => {
      const temp = {
        id: el.id,
        positionName: el.positionName,
        checked: false,
      };
      position_temp.push(temp);
    });
    setPositionList(position_temp);

    // Gắn dữ liệu cho salary min list
    salaryMin_temp = SalaryMin;
    setSalaryMinList(salaryMin_temp);
  }, []);

  const removeQuery = () => {
    // Làm trống query
    setQuery((prev) => ({
      ...prev,
      workingTypeId: null,
      salaryMin: null,
      positionId: null,
    }));

    // Làm mới lại danh mục
    var workingTpye_temp = [];
    var salaryMin_temp = [];
    var position_temp = [];

    salaryMin_temp = salaryMinList.map((data) => ({
      ...data,
      checked: false,
    }));
    setSalaryMinList(salaryMin_temp);

    position_temp = positionList.map((data) => ({
      ...data,
      checked: false,
    }));
    setPositionList(position_temp);

    workingTpye_temp = workingTypeList.map((data) => ({
      ...data,
      checked: false,
    }));
    setWorkingTypeList(workingTpye_temp);
  };

  return (
    <div className="block pb-4">
      <div className="m-auto w-[70rem]">
        <div className="mx-auto mb-12 flex justify-between">
          <div className="flex w-[85%] space-x-2">
            <div className="flex w-[15rem] items-center pr-4">
              <span
                className="text-2xl font-medium"
                onClick={() => {
                  console.log(workingTypeList);
                  console.log(salaryMinList);
                  console.log(positionList);
                  console.log(query);
                }}
              >
                Tìm việc nhanh
              </span>
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
            className="rounded-[4px] bg-blue-600 px-8 py-2 font-medium text-white hover:bg-blue-500"
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

            {post?.map((el) => {
              return (
                <JobItem
                  key={el.id}
                  jobName={el.jobTitle}
                  companyName={el.Company.companyName}
                  salaryMax={el.salaryMax}
                  salaryMin={el.salaryMin}
                  endDate={el.endDate}
                  pid={el.id}
                  image={el.Company.imageLink}
                />
              );
            })}
          </div>

          <div className="w-[30%]">
            <div className="border-[1px] border-gray-300 bg-white">
              <h2 className="border-b-[1px] border-gray-300 bg-gradient-to-r from-blue-700 to-blue-500 px-7 py-4 text-lg font-bold text-white">
                LỌC THEO
              </h2>

              {query.salaryMin || query.positionId || query.workingTypeId ? (
                <div className="flex flex-wrap gap-2">
                  <div className="mx-7 my-2 w-[100%] bg-gray-100 p-2">
                    {salaryMinList?.map((el, idx) => {
                      if (el.checked) {
                        return (
                          <div
                            className="w-fit border-[1px] border-gray-200 bg-white px-2 py-1 text-sm"
                            key={idx}
                          >
                            {el.label}
                          </div>
                        );
                      }
                    })}
                    {positionList?.map((el, idx) => {
                      if (el.checked) {
                        return (
                          <div
                            className="w-fit border-[1px] border-gray-200 bg-white px-2 py-1 text-sm"
                            key={idx}
                          >
                            {el.positionName}
                          </div>
                        );
                      }
                    })}
                    {workingTypeList?.map((el, idx) => {
                      if (el.checked) {
                        return (
                          <div
                            className="w-fit border-[1px] border-gray-200 bg-white px-2 py-1 text-sm"
                            key={idx}
                          >
                            {el.workingTypeName}
                          </div>
                        );
                      }
                    })}
                    <div
                      className="cursor-pointer py-1 text-sm text-blue-600 hover:underline"
                      onClick={removeQuery}
                    >
                      Xóa
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="px-7">
                {/* <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4">
                  <span>ĐỊA ĐIỂM</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </div> */}
                <div className="border-b-[1px] border-gray-300 py-4">
                  <div className="flex items-center justify-between">
                    <span
                      onClick={() => setSalaryToggle((prev) => !prev)}
                      className={
                        salaryToggle
                          ? "cursor-pointer font-bold"
                          : "cursor-pointer hover:font-bold"
                      }
                    >
                      MỨC LƯƠNG
                    </span>
                    {!salaryToggle ? (
                      <i
                        className="fa-solid fa-chevron-right cursor-pointer"
                        onClick={() => setSalaryToggle((prev) => !prev)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down cursor-pointer"
                        onClick={() => setSalaryToggle((prev) => !prev)}
                      ></i>
                    )}
                  </div>

                  <div className="space-y-2">
                    {salaryToggle
                      ? salaryMinList?.map((el, idx) => {
                          if (el.checked) {
                            return (
                              <div
                                className="mt-2 cursor-pointer pl-4 font-bold hover:bg-blue-200"
                                key={idx}
                                onClick={() => {
                                  setQuery((prev) => ({
                                    ...prev,
                                    salaryMin: el.value,
                                  }));

                                  const arrtemp = salaryMinList.map((data) => ({
                                    ...data,
                                    checked: false,
                                  }));
                                  arrtemp[idx].checked = true;

                                  setSalaryMinList(arrtemp);
                                }}
                              >
                                {el.label}
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="mt-2 cursor-pointer pl-4 text-gray-500 hover:bg-blue-200"
                                key={idx}
                                onClick={() => {
                                  setQuery((prev) => ({
                                    ...prev,
                                    salaryMin: el.value,
                                  }));

                                  const arrtemp = salaryMinList.map((data) => ({
                                    ...data,
                                    checked: false,
                                  }));
                                  arrtemp[idx].checked = true;

                                  setSalaryMinList(arrtemp);
                                }}
                              >
                                {el.label}
                              </div>
                            );
                          }
                        })
                      : null}
                  </div>
                </div>

                <div className="border-b-[1px] border-gray-300 py-4">
                  <div className="flex items-center justify-between">
                    <span
                      onClick={() => setWorkingTypeToggle((prev) => !prev)}
                      className={
                        workingTypeToggle
                          ? "cursor-pointer font-bold"
                          : "cursor-pointer hover:font-bold"
                      }
                    >
                      HÌNH THỨC LÀM VIỆC
                    </span>
                    {!workingTypeToggle ? (
                      <i
                        className="fa-solid fa-chevron-right cursor-pointer"
                        onClick={() => setWorkingTypeToggle((prev) => !prev)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down cursor-pointer"
                        onClick={() => setWorkingTypeToggle((prev) => !prev)}
                      ></i>
                    )}
                  </div>

                  <div className="space-y-2">
                    {workingTypeToggle
                      ? workingTypeList?.map((el, idx) => {
                          if (el.checked) {
                            return (
                              <div
                                className="mt-2 cursor-pointer pl-4 font-bold hover:bg-blue-200"
                                key={idx}
                                onClick={() => {
                                  setQuery((prev) => ({
                                    ...prev,
                                    workingTypeId: el.id,
                                  }));

                                  const arrtemp = workingTypeList.map(
                                    (data) => ({
                                      ...data,
                                      checked: false,
                                    }),
                                  );
                                  arrtemp[idx].checked = true;

                                  setWorkingTypeList(arrtemp);
                                }}
                              >
                                {el.workingTypeName}
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="mt-2 cursor-pointer pl-4 text-gray-500 hover:bg-blue-200"
                                key={idx}
                                onClick={() => {
                                  setQuery((prev) => ({
                                    ...prev,
                                    workingTypeId: el.id,
                                  }));

                                  const arrtemp = workingTypeList.map(
                                    (data) => ({
                                      ...data,
                                      checked: false,
                                    }),
                                  );
                                  arrtemp[idx].checked = true;

                                  setWorkingTypeList(arrtemp);
                                }}
                              >
                                {el.workingTypeName}
                              </div>
                            );
                          }
                        })
                      : null}
                  </div>
                </div>

                <div className="py-4">
                  <div className="flex items-center justify-between">
                    <span
                      onClick={() => setPositionToggle((prev) => !prev)}
                      className={
                        positionToggle
                          ? "cursor-pointer font-bold"
                          : "cursor-pointer hover:font-bold"
                      }
                    >
                      VỊ TRÍ LÀM VIỆC
                    </span>
                    {!positionToggle ? (
                      <i
                        className="fa-solid fa-chevron-right cursor-pointer"
                        onClick={() => setPositionToggle((prev) => !prev)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down cursor-pointer"
                        onClick={() => setPositionToggle((prev) => !prev)}
                      ></i>
                    )}
                  </div>

                  <div className="space-y-2">
                    {positionToggle
                      ? positionList?.map((el, idx) => {
                          if (el.checked) {
                            return (
                              <div
                                className="mt-2 cursor-pointer pl-4 font-bold hover:bg-blue-200"
                                key={idx}
                                onClick={() => {
                                  setQuery((prev) => ({
                                    ...prev,
                                    positionId: el.id,
                                  }));

                                  const arrtemp = positionList.map((data) => ({
                                    ...data,
                                    checked: false,
                                  }));
                                  arrtemp[idx].checked = true;

                                  setPositionList(arrtemp);
                                }}
                              >
                                {el.positionName}
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="mt-2 cursor-pointer pl-4 text-gray-500 hover:bg-blue-200"
                                key={idx}
                                onClick={() => {
                                  setQuery((prev) => ({
                                    ...prev,
                                    positionId: el.id,
                                  }));

                                  const arrtemp = positionList.map((data) => ({
                                    ...data,
                                    checked: false,
                                  }));
                                  arrtemp[idx].checked = true;

                                  setPositionList(arrtemp);
                                }}
                              >
                                {el.positionName}
                              </div>
                            );
                          }
                        })
                      : null}
                  </div>
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
