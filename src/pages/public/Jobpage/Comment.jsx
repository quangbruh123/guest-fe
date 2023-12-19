import React from "react";
import { dateVN } from "../../../utils/helper";

const Comment = ({ info }) => {
  const date = `${info?.createdAt}`;
  const date0 = date.split("T");
  return (
    <div className="mb-6 flex items-start gap-4 border-b-[1px] border-slate-300 pb-6">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="w-[85%]">
        <div className="text-sm">{info?.Candidate?.candidateName}</div>
        <div className="text-sm text-gray-500">
          Ngày bình luận: {dateVN(date0[0])}
        </div>
        <div className="mt-3">{info?.commentText}</div>
      </div>
      <div className="flex items-center gap-1 font-semibold">
        {info?.rating}
        <i className="fa-solid fa-star text-yellow-300"></i>
      </div>
    </div>
  );
};

export default Comment;
