//import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  //const pending = '';
  //const active = '';

  return (
    <div className="navbar fixed left-0 right-0 top-0 z-50 block h-[72px] w-full max-w-full bg-white">
      <div className="flex h-full flex-row items-center justify-between shadow-md">
        <div className="flex h-full items-center pl-4">
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              src="https://www.pngkey.com/png/detail/32-325790_blue-recommendation-icon-png.png"
              alt=""
              className="h-[70%] w-[70%] object-contain"
            />
          </div>
          <NavLink to="/jobs">Tất cả việc làm</NavLink>
          <NavLink to={"/cong-ty"}>Nhà tuyển dụng</NavLink>
          <NavLink>Giới thiệu</NavLink>
          <NavLink to="/news">Tin tức</NavLink>
        </div>
        <div className="flex">
          <NavLink>Đăng ký</NavLink>
          <NavLink className="bg-blue-700 font-medium text-white hover:bg-blue-600 hover:!text-white hover:!shadow-none">
            Đăng nhập
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
