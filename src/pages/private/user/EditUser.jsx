import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import Swal from "sweetalert2";

const EditUser = () => {
  return (
    <div className="mx-auto h-[1000px] w-[85rem]">
      <div className="flex">
        <div className="w-[70%] pr-2">
          <div className="rounded-lg bg-white px-7 py-5">
            <h1 className="mb-3 text-xl font-bold">
              Cài đặt thông tin cá nhân
            </h1>
            <div className="mb-3 flex gap-1">
              <span className="font-semibold text-red-500">(*)</span>
              <span className="font-medium text-[#4D5965]">
                Các thông tin bắt buộc
              </span>
            </div>
            <div className="mb-5 w-[100%] space-y-2">
              <div className="flex gap-1">
                <label className="">Họ tên</label>
                <div className="font-medium text-red-500">*</div>
              </div>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-user p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto focus:outline-none"
                  placeholder="Nhập username"
                  name="username"
                  onChange={(e) => {}}
                ></input>
              </div>
            </div>

            <div className="mb-5 w-[100%] space-y-2">
              <div className="flex gap-1">
                <label className="">Email</label>
                <div className="font-medium text-red-500">*</div>
              </div>

              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-user p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto focus:outline-none"
                  placeholder="Nhập username"
                  name="username"
                  onChange={(e) => {}}
                ></input>
              </div>
            </div>

            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-1/3 space-y-2">
                <div className="flex gap-1">
                  <label className="">Tuổi</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập username"
                    name="username"
                    onChange={(e) => {}}
                  ></input>
                </div>
              </div>
              <div className="w-1/3 space-y-2">
                <div className="flex gap-1">
                  <label className="">Số điện thoại</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập username"
                    name="username"
                    onChange={(e) => {}}
                  ></input>
                </div>
              </div>
              <div className="w-1/3 space-y-2">
                <div className="flex gap-1">
                  <label className="">CMND/CCCD</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập username"
                    name="username"
                    onChange={(e) => {}}
                  ></input>
                </div>
              </div>
            </div>
            <div className="mb-5 w-[100%] space-y-2">
              <div className="flex gap-1">
                <label className="">Địa chỉ</label>
                <div className="font-medium text-red-500">*</div>
              </div>

              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-user p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto focus:outline-none"
                  placeholder="Nhập username"
                  name="username"
                  onChange={(e) => {}}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="rounded-lg bg-white p-5">Hình ứng viên</div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
