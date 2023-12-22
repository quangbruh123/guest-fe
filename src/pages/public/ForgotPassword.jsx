import React, { useState } from "react";
import LoginImg from "../../assets/login-img.svg";
import { Link, NavLink } from "react-router-dom";
import isEmail from "../../utils/checkEmail";
import Swal from "sweetalert2";
import { apiForgetPassword } from "../../apis/auth";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleClick = async () => {
    if (!isEmail(email)) {
      await Swal.fire({
        title: "Error",
        text: "Vui lòng nhập đúng mật khẩu",
        icon: "warning",
      });
      return;
    }

    const response = await apiForgetPassword({ email, isUser: true });

    if (response.status === 200) {
      await Swal.fire({
        title: "Thành công",
        text: "Đã gửi email xác nhận vui lòng kiểm tra, thời hạn 15 phút",
        icon: "success",
      });
    } else {
      await Swal.fire({
        title: "Có lỗi xảy ra",
        text: response.response.data.msg || "Chưa xác định",
        icon: "error",
      });
    }
  };
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="w-[60%]">
        <div className="mx-auto w-[60%]">
          <div className="mb-5">
            <h2 className="mb-1 text-[22px] font-semibold text-blue-600">
              Quên mật khẩu
            </h2>
          </div>

          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Email</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i className="fa-solid fa-envelope p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto focus:outline-none"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="mb-5 flex w-[100%] items-center justify-center rounded-md bg-blue-600 text-white">
            <button className="w-full py-3 text-center" onClick={handleClick}>
              Tạo lại mật khẩu
            </button>
          </div>
          <div className="mb-5 flex w-[100%] justify-between">
            <NavLink
              className="font-[450] text-blue-600 hover:underline"
              to="/dang-nhap"
            >
              Quay lại đăng nhập
            </NavLink>
            <NavLink
              className="font-[450] text-blue-600 hover:underline"
              to="/dang-ky"
            >
              Đăng ký tài khoản mới
            </NavLink>
          </div>
        </div>
      </div>
      <div className="h-screen w-[40%]">
        <img src={LoginImg} className="h-[100%] w-[100%] object-cover"></img>
      </div>
    </div>
  );
};

export default ForgotPassword;
