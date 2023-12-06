import React from "react";

const Comment = () => {
  return (
    <div className="mb-6 flex items-start gap-4 border-b-[1px] border-slate-300 pb-6">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="w-[80%]">
        <div className="text-sm">Tên user</div>
        <div className="text-sm text-gray-500">2023-12-01 20:17</div>
        <div className="mt-3">
          Tôi thấy bài đăng này rất ok, tôi muốn ứng tuyển
        </div>
      </div>
    </div>
  );
};

export default Comment;
