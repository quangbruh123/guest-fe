import React, { useEffect } from "react";
import JobDetailItem from "./JobDetailItem";
import { useParams } from "react-router-dom";

import { postAPI } from "../../../apis";
import useFetchData from "../../../utils/useFetchData";

const JobDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData(
    `/post/${id}`,
    null,
    "object",
  );
  console.log(data);

  return (
    <div className="block pb-10">
      <div className="m-auto w-[70rem]">
        <div className="mx-auto flex space-x-2">
          <div className="w-[70%] pr-2">
            <div className="mb-4 rounded-lg border-[1px] border-slate-200 bg-white px-6 py-5">
              <div className="mb-5 text-xl font-bold">{data?.jobTitle}</div>
              <div className="mb-5 flex items-center">
                <div className="flex w-1/3 items-center gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                    <i className="fa-solid fa-coins"></i>
                  </div>
                  <div className="flex flex-col">
                    <div>Mức lương</div>
                    <div>Mức lương</div>
                  </div>
                </div>
                <div className="flex w-1/3 items-center gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="flex flex-col">
                    <div>Địa điểm</div>
                    <div>Mức lương</div>
                  </div>
                </div>
                <div className="flex w-1/3 items-center gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </div>
                  <div className="flex flex-col">
                    <div>Kinh nghiệm</div>
                    <div>Mức lương</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 rounded-md bg-slate-200 px-2 py-1">
                  <i className="fa-solid fa-clock"></i>
                  <div>Hạn nộp hồ sơ:</div>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
                  <i className="fa-solid fa-paper-plane"></i>
                  <div>Ứng tuyển ngay</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-[1px] border-slate-200 bg-white p-4">
              <h2 className="mb-5 border-l-[6px] border-blue-700 pl-3 text-xl font-bold">
                Chi tiết tuyển dụng
              </h2>

              <h2 className="pt-2 text-base font-semibold">Phúc lợi</h2>
              <div className="py-2">{data?.benefits}</div>
              <h2 className="pt-2 text-base font-semibold">Mô tả công việc</h2>
              <div className="py-2">{data?.jobDescribe}</div>
              <h2 className="pt-2 text-base font-semibold">
                Yêu cầu chuyên môn
              </h2>
              <div className="py-2">{data?.jobRequirement}</div>
              <h2 className="pt-2 text-base font-semibold">Địa chỉ làm việc</h2>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="mb-6 rounded-lg border-[1px] border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-start gap-4">
                <div className="h-[88px] w-[88px] border-[1px] border-slate-200"></div>
                <div className="text-lg font-medium">Tên công ty</div>
              </div>
              <div className="items-center space-y-2 py-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-user-group w-[16px] text-center"></i>
                    <div>Quy mô: </div>
                  </div>
                  <div>1000</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-location-dot w-[16px] text-center"></i>
                    <div>Quy mô: </div>
                  </div>
                  <div>1000</div>
                </div>
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
