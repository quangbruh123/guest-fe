import React from "react";
import { Link, NavLink } from "react-router-dom";

import JobItem from "./JobItem";
import JobCategories from "./JobCategories";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/footer";

const Homepage = () => {
  return (
    <div className=" bg-slate-100">
      {/* <img
        src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/banner-top.jpg"
        alt=""
        className="relative h-full w-full"
      >
        <div className="bg-white text-black">
          Đăng ký công việc yêu thích của bạn ngay tại đây
        </div>
      </img> */}
      <div className="relative flex h-[700px]">
        <div className="absolute z-20 flex h-full w-[50%] flex-col justify-center bg-gradient-to-r from-black to-transparent">
          <div className="pl-8">
            <div className="my-6 text-4xl font-semibold text-white">
              Kiến tạo tương lai của bạn ngay bây giờ
            </div>
            <div className="my-6 w-[70%] text-white">
              Việc làm mới, công ty phù hợp, định hướng nghề nghiệp. Tất cả đều
              là dành cho bạn, trong một ứng dụng duy nhất
            </div>
            <div className="my-6 w-fit cursor-pointer rounded-[2px] bg-[#0067b8] p-4 font-semibold text-white hover:bg-[#004a7f]">
              Tìm hiểu thêm
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("https://sieuthivieclam.vn/templates/sieuthivieclam/images/banner-top.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="z-10 h-full w-[100%]"
        ></div>
      </div>

      {/* body */}
      <div className="h-fit">
        <div className="mx-auto flex justify-between bg-white py-6">
          <div className="mx-auto flex w-[60rem] justify-between">
            <div className="flex w-[85%] space-x-2">
              <div className="flex w-[40%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 px-2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Nhập tên công việc"
                  className="outline-none"
                ></input>
              </div>
              <div className="flex w-[30%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 px-2">
                <i className="fa-solid fa-list"></i>
                <select
                  placeholder="Chọn ngành nghề"
                  className="flex h-full w-full cursor-pointer items-center outline-none"
                >
                  <option>Chọn ngành nghề</option>
                </select>
              </div>
              <div className="flex w-[30%] items-center space-x-2 rounded-[4px] border-[1px] border-gray-400 px-2">
                <i className="fa-solid fa-location-dot"></i>
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
        </div>

        <div className="mx-auto mt-6 h-[1000px] w-[85rem]">
          <div className="ml-[-15px] mr-[-15px] w-[100%]">
            <div className="flex">
              <div className="w-[70%] pr-2">
                <div className="flex  justify-start">
                  <div className="h-fit cursor-pointer bg-slate-200 px-6 py-3 font-medium text-gray-400 hover:bg-blue-600 hover:text-white">
                    Công việc mới, nổi bật
                  </div>
                  <div className="h-fit cursor-pointer bg-slate-200 px-6 py-3 font-medium text-gray-400 hover:bg-blue-600 hover:text-white">
                    Công việc lương cao
                  </div>
                </div>
                <div className="flex flex-col bg-white">
                  <div className=" mb-4 grid grid-cols-12 gap-x-4 divide-y divide-dashed">
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
                    <JobItem></JobItem>
                  </div>
                  <div className="my-4 ml-4 text-red-600">
                    <Link className="">Xem tất cả việc làm &gt;&gt;</Link>
                  </div>
                </div>
              </div>

              <div className="w-[30%]">
                <div className="border-[1px] border-gray-300 bg-white">
                  <h2 className="border-b-[1px] border-gray-300 px-7 py-6 text-xl font-bold">
                    DANH MỤC
                  </h2>
                  <div></div>
                  <div className="px-7">
                    <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-6">
                      <span>TẤT CẢ VIỆC LÀM</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-6">
                      <span>NHÀ TUYỂN DỤNG</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-6">
                      <span>GIỚI THIỆU</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="flex items-center justify-between py-6">
                      <span>TIN TỨC - SỰ KIỆN</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-3 h-[1000px] w-[85rem]">
          <h2 className="mb-8 text-2xl leading-7">VIỆC THEO NGÀNH NGHỀ</h2>
          <div className="ml-[-15px] mr-[-15px] w-[100%]">
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
            <JobCategories
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobCategories>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
