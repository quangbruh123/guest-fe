//import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-dam text-sm leading-4 text-white">
      <div className=" pt-12">
        <div className="mx-auto grid w-[1200px] grid-cols-4 gap-4 px-[90px] ">
          <div>
            <h3 className="mb-4 text-xl">Về trung tâm tư vấn việc làm</h3>
            <ul className="space-y-2">
              <li>Giới thiệu</li>
              <li>Tin tức - Sự kiện</li>
              <li>Hướng dẫn sử dụng</li>
              <li>Thoả thuận sử dụng</li>
              <li>Quy định bảo mật</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl">Tổng đài tư vấn việc làm</h3>
            <div className="flex items-center justify-center gap-5">
              <i className="fa-solid fa-phone text-lg"></i>
              <div className="flex-1 text-lg">0123456789</div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl">Liên hệ</h3>
            <div>
              <span>Danh sách chi nhánh</span>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl">Kết nối với chúng tôi</h3>
            <div className="flex items-center justify-between">
              <div className="">
                <i className="fa-brands fa-facebook text-lg"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-instagram text-lg"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-youtube text-lg"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-tiktok text-lg"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center border-t-2 border-white py-4">
          <div className="w-fit text-center">
            <p>Copyright © 2017 Sieuthivieclam. All rights reserved</p>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
