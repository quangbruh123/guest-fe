import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faList,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import JobItem from "./JobItem";

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
            <div className="flex w-[80%] space-x-2">
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
        </div>
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
    </div>
  );
};

export default Homepage;
