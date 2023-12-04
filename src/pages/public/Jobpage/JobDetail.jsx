import React from "react";
import JobDetailItem from "./JobDetailItem";
import useFetchData from "../../../utils/useFetchData";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { pid } = useParams();
  const { data, isLoading, error } = useFetchData(
    `http://localhost:5000/api/v1/post/${pid}`,
    {},
    "object",
  );
  return (
    <div className="block pb-10">
      <div className="m-auto w-[70rem]">
        <div className="mx-auto flex space-x-2">
          <div className="w-[70%] pr-2">
            <div className="border-[1px] border-slate-200 bg-white p-4">
              <h1 className="text-3xl">{data?.jobTitle}</h1>
              <h2 className="pt-2 text-lg">{data?.Company?.companyName}</h2>
              <div className="flex items-center justify-between py-4">
                <span className="text-gray-600">
                  <span className="mr-2">Ngày cập nhật:</span>
                  <span>{data?.updatedAt}</span>
                </span>
                <button className="flex items-center space-x-1 rounded-md bg-blue-700 p-4 font-medium text-white">
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Nộp đơn ứng tuyển</span>
                </button>
              </div>
              <h2 className="pt-2 text-lg font-bold text-[#FF4900]">
                Thông tin tuyển dụng
              </h2>
              <ul className="grid w-[100%] grid-cols-12 py-2">
                <li className="col-span-6 border-r-[4px] border-white bg-slate-200 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Cấp bậc:
                  </span>
                  <span className="w-[70%]">
                    {data?.Position?.positionName}
                  </span>
                </li>
                <li className="col-span-6 border-r-[4px] border-white bg-slate-200 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Kinh nghiệm:
                  </span>
                  <span className="w-[70%]">{data?.experienceYear}</span>
                </li>

                <li className="col-span-6 border-r-[4px] border-white bg-slate-50 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Ngành nghề:
                  </span>
                  <span className="w-[70%]">Bind cấp bậc</span>
                </li>
                <li className="col-span-6 border-r-[4px] border-white bg-slate-50 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Lương:
                  </span>
                  <span className="w-[70%]">Bind cấp bậc</span>
                </li>

                <li className="col-span-6 border-r-[4px] border-white bg-slate-200 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Số lượng:
                  </span>
                  <span className="w-[70%]">{data?.requiredAmount}</span>
                </li>
                <li className="col-span-6 border-r-[4px] border-white bg-slate-200 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Hình thức
                  </span>
                  <span className="w-[70%]">
                    {data?.WorkingType?.workingTypeName}
                  </span>
                </li>

                <li className="col-span-6 border-r-[4px] border-white bg-slate-50 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Tuổi:
                  </span>
                  <span className="w-[70%]">Bind cấp bậc</span>
                </li>
                <li className="col-span-6 border-r-[4px] border-white bg-slate-50 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Nơi làm việc:
                  </span>
                  <span className="w-[70%]">Bind cấp bậc</span>
                </li>

                <li className="col-span-6 border-r-[4px] border-white bg-slate-200 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Trình độ:
                  </span>
                  <span className="w-[70%]">
                    {data?.AcademicLevel?.academicLevelName}
                  </span>
                </li>
                <li className="col-span-6 border-r-[4px] border-white bg-slate-200 p-2">
                  <span className="inline-block w-[30%] font-medium">
                    Hạn nộp hồ sơ:
                  </span>
                  <span className="w-[70%]">{data?.endDate}</span>
                </li>
              </ul>
              <h2 className="pt-2 text-lg font-bold text-[#FF4900]">
                Phúc lợi
              </h2>
              <div className="py-2">{data?.benefits}</div>
              <h2 className="pt-2 text-lg font-bold text-[#FF4900]">
                Mô tả công việc
              </h2>
              <div className="py-2">{data?.jobDescription}</div>
              <h2 className="pt-2 text-lg font-bold text-[#FF4900]">
                Yêu cầu chuyên môn
              </h2>
              <div className="py-2">{data?.jobRequirement}</div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="mb-6 border-[1px] border-gray-200 bg-white p-4 text-center">
              <span>Chia sẻ việc làm này</span>
              <div className="flex justify-center space-x-2 py-2">
                <i className="fa-brands fa-facebook text-3xl text-blue-700"></i>
                <i className="fa-brands fa-square-x-twitter text-3xl"></i>
              </div>
            </div>
            <div className="border-[1px] border-gray-200 bg-white ">
              <div className="font border-b-[1px] border-gray-200 p-4">
                Các công việc tương tự
              </div>

              <div className="">
                <JobDetailItem></JobDetailItem>
                <JobDetailItem></JobDetailItem>
                <JobDetailItem></JobDetailItem>
                <JobDetailItem></JobDetailItem>
                <JobDetailItem></JobDetailItem>
                <JobDetailItem></JobDetailItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
