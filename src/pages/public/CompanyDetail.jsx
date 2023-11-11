import { NavLink } from "react-router-dom";
import JobItem from "../../Components/Company/JobItem";

const CompanyDetail = () => {
  return (
    <div className="m-auto w-main">
      <div className="cover-inner mb-6 min-h-[358px] rounded-xl bg-gradient-to-r from-[#212f3f] to-[#00b14f]">
        <div className="cover-wrapper h-[224px] overflow-hidden">
          <img
            src="https://static.topcv.vn/company_covers/BL6ef3SJULpJu4nT7R66.jpg"
            alt=""
            draggable="false"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="logo relative">
          <div className="absolute -top-[90px] left-[40px] flex h-[180px] w-[180px] items-center justify-center rounded-[100px] border-4 border-white bg-white">
            <img
              src=""
              alt="Ảnh công ty"
              draggable="false"
              className="h-4/5 w-4/5 object-contain"
            />
          </div>
        </div>
        <div className="my-8 flex items-center gap-x-8 pl-[252px] pr-10">
          <div className="flex-1">
            <h1 className="mb-4 line-clamp-1 max-w-full overflow-hidden text-2xl font-semibold text-white">
              Tên công ty
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex">
                <i className="fa-solid fa-globe mr-2 text-[20px] text-white"></i>
                <NavLink
                  className={
                    "line-clamp-1 overflow-hidden text-sm font-normal text-white"
                  }
                >
                  aaaa
                </NavLink>
              </div>
              <div className="flex">
                <i className="fa-solid fa-building mr-2 text-[20px] text-white "></i>
                <span
                  className={
                    "line-clamp-1 overflow-hidden text-sm font-normal text-white"
                  }
                >
                  aaaa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="left col-span-8">
            <div className="introduce mb-8 overflow-hidden rounded-xl bg-white">
              <h2 className="m-0 bg-gradient-to-r from-[#1c4742] to-[#22c96d] px-5 py-3 text-lg font-semibold text-white">
                Giới thiệu công ty
              </h2>
              <div className="box-body px-5 pb-7 pt-5">
                <div className="relative overflow-hidden">
                  <p className="mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="absolute bottom-0 h-[48px] w-full bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <button className="mt-4 border-none text-sm font-medium text-blue-dam outline-none">
                  Xem thêm
                  <i className="fa-solid fa-chevron-down ml-2"></i>
                </button>
              </div>
            </div>

            <div className="job-listing">
              <h2 className="m-0 rounded-t-[10px] bg-gradient-to-r from-[#1c4742] to-[#22c96d] px-5 py-3 text-lg font-semibold text-white">
                Tuyển dụng
              </h2>
              <div className="box-body mb-11 rounded-b-[10px] border border-[#e9eaec] bg-white px-5 py-8">
                <div className="mb-4 grid grid-cols-12 gap-2">
                  <div className="col-span-8 flex items-center gap-4 rounded-[6px] border py-1 pl-3 pr-0">
                    <div>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Nhập tên công việc"
                      className="flex-1 border-none outline-none"
                    />
                  </div>
                  <div className="col-span-4 ">
                    <button className="flex items-center gap-3 rounded-lg bg-[#00b14f] px-3 py-4 text-base font-normal text-white">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Tìm kiếm
                    </button>
                  </div>
                </div>
                <div className="job-list">
                  <JobItem />
                  <JobItem />
                  <JobItem />
                </div>
                <div className="mt-5 flex justify-center gap-6">
                  <button className=" font-xl rounded-full border-blue-dam text-blue-dam outline-none">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>

                  <span className="text-xl text-[#ccc]">1/3 trang</span>

                  <button className=" font-xl rounded-full border-blue-dam text-blue-dam outline-none">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-span-4">
            <div className="mb-8 overflow-hidden">
              <h2 className="m-0 rounded-t-md bg-gradient-to-r from-[#1c4742] to-[#22c96d] px-5 py-3 text-lg font-semibold text-white">
                Giới thiệu công ty
              </h2>
              <div className="box-body rounded-b-md border border-[#e9eaec] px-5 pb-2">
                <div className="py-5">
                  <div className="mb-2 flex items-center">
                    <i className="fa-solid fa-location-dot mr-2 text-2xl"></i>
                    <span className="text-sm text-black">Địa chỉ công ty</span>
                  </div>
                  <div className="text-sm font-normal text-[#4d5965]">
                    Địa chỉ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
