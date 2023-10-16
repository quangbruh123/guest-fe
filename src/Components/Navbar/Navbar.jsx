//import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  //const pending = '';
  //const active = '';

  return (
    <div className='block fixed top-0 right-0 left-0 bg-white w-full max-w-full'>
      <div className='flex flex-row justify-between shadow-md'>
        <div className='flex pl-4 items-center'>
          <div className='w-14 h-14 flex items-center justify-center'>
            <img
              src='https://www.pngkey.com/png/detail/32-325790_blue-recommendation-icon-png.png'
              alt=''
              className='object-contain w-[70%] h-[70%]'
            />
          </div>
          <NavLink>Tất cả việc làm</NavLink>
          <NavLink>Nhà tuyển dụng</NavLink>
          <NavLink>Giới thiệu</NavLink>
        </div>
        <div className='flex'>
          <NavLink>Đăng ký</NavLink>
          <a className='bg-blue-700 text-white font-medium'>Đăng nhập</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
