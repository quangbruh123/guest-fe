import { NavLink } from "react-router-dom";

const JobItem = () => {
  return (
    <div className="mb-4 flex gap-4 rounded border border-[#f4f4f4] bg-white p-4">
      <div className="mx-auto mb-4 flex w-full gap-4 rounded-md border border-[#f00] p-4">
        <div className="image mx-auto flex aspect-square h-[100px] w-[100px] items-center rounded-lg border border-[#f4f4f4] bg-white">
          <NavLink>
            <img
              src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/tap-doan-brg-62f6156ccf143.jpg"
              alt=""
              className="h-full w-full"
            />
          </NavLink>
        </div>
        <div className="flex w-full flex-col gap-x-3">
          <div className="content mb-2 flex justify-between">
            <div>
              <h3 className="mb-1 mr-6 line-clamp-2 text-base font-semibold text-blue-dam">
                <NavLink>Tên công việc</NavLink>
              </h3>
              <span className="line-clamp-1 w-full text-sm font-normal text-[#424e5c]">
                Tên công ty
              </span>
            </div>
            <div className="mr-12">
              <i className="fa-solid fa-coins"></i>
              <span className="ml-4"> Thoả thuận</span>
            </div>
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <label className="rounded-sm bg-[#e9eaec] px-2 py-1 text-xs text-blue-dam">
                Địa chỉ
              </label>
              <label className="rounded-sm bg-[#e9eaec] px-2 py-1 text-xs text-blue-dam">
                Còn 10 ngày ứng tuyển
              </label>
            </div>
            <div>
              <button className="mr-8 flex h-7 items-center justify-center rounded border-none bg-blue-dam px-4 py-2 text-xs text-white outline-none">
                Ứng tuyển
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
