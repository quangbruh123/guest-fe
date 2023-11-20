import React from "react";
import LoginImg from "../../assets/login-img.svg";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="w-[60%]">
        <div className="mx-auto w-[60%]">
          <div className="mb-5">
            <h2 className="mb-1 text-[22px] font-semibold text-blue-600">
              Chào mừng bạn đến với Trung tâm giới thiệu việc làm
            </h2>
            <span className="text-[#6F7882]">
              Cùng nhau xây dựng tương lai việc làm ngay tại Trung tâm giới
              thiệu việc làm
            </span>
          </div>

          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Họ và tên</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i class="fa-solid fa-user p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto focus:outline-none"
                placeholder="Nhập họ tên"
              ></input>
            </div>
          </div>
          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Email</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i class="fa-solid fa-envelope p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto focus:outline-none"
                placeholder="Nhập email"
              ></input>
            </div>
          </div>
          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Mật khẩu</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i class="fa-solid fa-lock p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto pr-2 focus:outline-none"
                placeholder="Nhập mật khẩu"
                type="password"
              ></input>
            </div>
          </div>
          <div className="mb-7 w-[100%] space-y-2">
            <label className="">Xác nhận mật khẩu</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i class="fa-solid fa-lock p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto pr-2 focus:outline-none"
                placeholder="Nhập mật khẩu"
                type="password"
              ></input>
            </div>
          </div>

          <div className="mb-5 flex w-[100%] items-center justify-center rounded-md bg-blue-600 text-white">
            <button className="w-full py-3">Đăng ký</button>
          </div>
          <div className="mb-5 flex w-[100%] items-center justify-center text-[#6F7882]">
            <span>Hoặc đăng nhập bằng</span>
          </div>
          <div className="mb-5 flex w-[100%] items-center justify-between">
            <button className="w-[45%] space-x-2 rounded-md bg-[#e73b2f] py-3 text-white hover:bg-[#d3533d]">
              <i class="fa-brands fa-google"></i>
              <span>Google</span>
            </button>
            <button className="w-[45%] space-x-2 rounded-md bg-[#1877f2] py-3 text-white hover:bg-[#0b5ed7]">
              <i class="fa-brands fa-facebook"></i>
              <span>Facebook</span>
            </button>
          </div>
          <div className="mb-5 flex w-[100%] items-center justify-center space-x-1 text-[#6F7882]">
            <span>Bạn đã có tài khoản?</span>
            <Link
              className="font-[450] text-blue-600 hover:underline"
              to="/dang-nhap"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen w-[40%]">
        <img src={LoginImg} className="h-[100%] w-[100%] object-cover"></img>
      </div>
    </div>
  );
};

export default SignUp;
