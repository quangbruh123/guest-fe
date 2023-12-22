import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiResetPassword } from "../../apis/auth";
const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Lấy object chứa tất cả các thông tin về query parameters
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const resetToken = queryParams.get("resetToken");

  if (!email || !resetToken) {
    navigate("/");
  }

  const [newPassword, setNewPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);

  const handleChangePassword = async () => {
    toast.loading("Đang xử lý thông tin...");
    if (newPassword !== rePassword) {
      toast.dismiss();
      await Swal.fire({
        title: "Error",
        text: "Mật khẩu và mật khẩu nhập lại không trùng khớp.",
        timer: 1000,
        icon: "warning",
      });
      return;
    }

    const response = await apiResetPassword({
      email,
      resetToken,
      password: newPassword,
      isUser: true,
    });
    if (response.status === 204) {
      toast.dismiss();
      await Swal.fire({
        title: "Thành công",
        text: "Bạn đã cập nhật thành công",
        timer: 2000,
        icon: "success",
      }),
        navigate("/dang-nhap");
    } else {
      toast.dismiss();
      await Swal.fire({
        title: "Có lỗi xảy ra",
        text: response.response.data.msg || "Chưa xác định",
        icon: "error",
      });
    }
  };
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="pt-12">
        <div className="mx-auto w-[600px] rounded-md bg-white p-7">
          <div className="border-b-[1px] border-gray-200">
            <h2 className="mb-1 text-center text-[22px] font-semibold text-blue-600">
              Tạo lại mật khẩu của bạn
            </h2>
            <h2 className="mb-3 text-center text-[#6F7882]">
              Đăng nhập ngay để bắt đầu xây dựng một hồ sơ nổi bật cho bạn và
              nhận được các cơ hội sự nghiệp lý tưởng
            </h2>
            <div className="mb-5 w-[100%] space-y-2">
              <label className="">Mật khẩu mới</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-lock p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto pr-2 focus:outline-none"
                  placeholder="Nhập mật khẩu mới"
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="mb-5 w-[100%] space-y-2">
              <label className="">Nhập lại mật khẩu</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-lock p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto pr-2 focus:outline-none"
                  placeholder="Nhập lại mật khẩu"
                  type="password"
                  onChange={(e) => setRePassword(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="mb-8 mt-7 flex w-[100%] items-center justify-center rounded-md bg-blue-600 text-white">
              <button
                className="w-full py-3 text-center"
                onClick={handleChangePassword}
              >
                Tạo mật khẩu mới
              </button>
            </div>

            <div className="mb-5 flex w-[100%] justify-between">
              <Link
                className="font-[450] text-blue-600 hover:underline"
                to="/dang-nhap"
              >
                Quay lại đăng nhập
              </Link>
              <Link
                className="font-[450] text-blue-600 hover:underline"
                to="/dang-ky"
              >
                Đăng ký tài khoản mới
              </Link>
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center">
            <h2 className="font-medium">Bạn gặp khó khăn khi tạo tài khoản?</h2>
            <h2>Vui lòng gọi tới số 1900 8888 (giờ hành chính)</h2>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ResetPassword;
