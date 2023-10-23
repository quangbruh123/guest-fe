import React from "react";
import { NavLink } from "react-router-dom";
import JobItem from "./JobItem";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/footer";

const Homepage = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll bg-slate-100">
      {/* <img
        src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/banner-top.jpg"
        alt=""
        className="relative h-full w-full"
      >
        <div className="bg-white text-black">
          Đăng ký công việc yêu thích của bạn ngay tại đây
        </div>
      </img> */}
      <div className="relative flex h-[700px] w-screen">
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
        <div className="mx-auto mt-6 h-[1000px] w-[85rem]">
          <h2 className="mb-8 text-2xl leading-7">CÔNG VIỆC MỚI NỔI BẬT</h2>
          <div className="ml-[-15px] mr-[-15px] w-[100%]"></div>
        </div>
        <div className="mx-auto mt-3 h-[1000px] w-[85rem]">
          <h2 className="mb-8 text-2xl leading-7">VIỆC THEO NGÀNH NGHỀ</h2>
          <div className="ml-[-15px] mr-[-15px] w-[100%]">
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
            <JobItem
              jobName="Cơ khí - Kĩ thuật ứng dụng - Tự động hoá"
              jobCount="555"
            ></JobItem>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Homepage;
