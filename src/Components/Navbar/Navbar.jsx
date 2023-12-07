//import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUsername } from "../../store/authReducer";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  //const pending = '';
  //const active = '';
  const username = useSelector(getUsername);
  const [hover, setHover] = useState(false);
  const handleLogOut = () => {};

  return (
    <div className="navbar fixed left-0 right-0 top-0 z-50 block h-[72px] w-full max-w-full bg-white">
      <div className="flex h-full flex-row items-center justify-between shadow-md">
        <div className="special flex h-full items-center pl-4">
          <div className="flex h-14 w-14 items-center justify-center">
            <NavLink to="/">
              <img
                src="https://www.pngkey.com/png/detail/32-325790_blue-recommendation-icon-png.png"
                alt=""
                className="h-[70%] w-[70%] object-contain"
              />
            </NavLink>
          </div>
          <NavLink to="/jobs">Tất cả việc làm</NavLink>
          <NavLink to={"/cong-ty"}>Nhà tuyển dụng</NavLink>
          <NavLink>Giới thiệu</NavLink>
          <NavLink to="/news">Tin tức</NavLink>
        </div>
        <div className="special flex">
          {username ? (
            <div
              className="relative flex cursor-pointer items-center gap-3 pr-3"
              onMouseEnter={() => {
                setHover(true);
              }}
            >
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-slate-400">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="font-semibold">Xin chào, {username}</div>
              <i class="fa-solid fa-angle-down"></i>
              {hover && (
                <div className="absolute top-16 w-[280px] overflow-clip rounded-lg bg-white shadow-lg">
                  <div className="flex cursor-pointer items-center gap-4 px-5 py-4 hover:bg-gray-300">
                    <i className="fa-solid fa-user"></i>
                    <div>Thông tin tài khoản</div>
                  </div>
                  <div
                    className="flex cursor-pointer items-center gap-4 px-5 py-4 hover:bg-gray-300"
                    onClick={() => handleLogOut}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <div>Đăng xuất</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/dang-ky">Đăng ký</NavLink>
              <NavLink
                className="bg-blue-700 font-medium text-white hover:bg-blue-600 hover:!text-white hover:!shadow-none"
                to="/dang-nhap"
              >
                Đăng nhập
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
