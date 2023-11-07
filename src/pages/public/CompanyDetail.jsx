import { NavLink } from "react-router-dom";

const CompanyDetail = () => {
  return (
    <div className="m-auto w-main">
      <div className="cover-inner min-h-[358px] rounded-xl bg-gradient-to-r from-[#212f3f] to-[#00b14f]">
        <div className="cover-wrapper h-[224px] overflow-hidden">
          <img
            src="https://static.topcv.vn/company_covers/BL6ef3SJULpJu4nT7R66.jpg"
            alt=""
            draggable="false"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="logo relative">
          <div className="absolute left-[40px] top-0 flex h-[180px] w-[180px] items-center justify-center rounded-[100px] border-4 border-white bg-white">
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
            <div className="flex flex-wrap items-center">
              <div className="flex">
                <i className="fa-solid fa-globe mr-4"></i>
                <NavLink
                  className={
                    "line-clamp-1 overflow-hidden text-sm font-normal text-white"
                  }
                >
                  aaaa
                </NavLink>
              </div>
              <div className="flex">
                <i className="fa-solid fa-globe mr-4"></i>
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
    </div>
  );
};

export default CompanyDetail;
