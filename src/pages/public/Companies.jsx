import { NavLink } from "react-router-dom";
import CompanyItem from "../../Components/Company/CompanyItem";
const Companies = () => {
  return (
    <div className="-mt-12">
      <div className="min-h-[273px] bg-gradient-to-tr from-[#fff] to-[rgb(196,233,255)] pt-6">
        <div className="m-auto flex w-main px-2">
          <div className="left">
            <ul className="m-0 flex list-none flex-wrap p-0 pb-8">
              <li className="mr-6 w-fit">
                <NavLink
                  className={
                    "border-b-2 border-[#333] px-0 py-1 text-sm text-[#333]"
                  }
                >
                  Danh sách công ty
                </NavLink>
              </li>
            </ul>
            <div className="mb-9">
              <h1 className="pb-3 text-left text-2xl font-medium tracking-normal text-blue-800">
                Khám phá các công ty nổi bật
              </h1>
              <p className="text-base">
                Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành
                cho bạn
              </p>
            </div>

            <div className="relative flex h-[50px] overflow-hidden rounded-[100px] border-[1px] bg-white">
              <i className="fa-solid fa-magnifying-glass absolute left-[32px] top-2/4 -translate-y-2/4"></i>
              <input
                type="text"
                className="h-full w-full border-transparent pl-16 text-base text-[#212529] outline-none"
                placeholder="Nhập tên công ty"
              />
              <button className=" absolute right-[7px] top-2/4 -translate-y-2/4 rounded-[100px] bg-blue-700 px-3 py-1 text-base text-white">
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="right ml-auto">
            <img
              src="https://static.topcv.vn/v4/image/brand-identity/company-billBoard.png?v=1.0.0"
              alt="ảnh"
              className="w-[272px]"
            />
          </div>
        </div>
      </div>
      <div className="m-auto w-main">
        <h1 className="py-6 text-center text-2xl font-semibold uppercase text-[#333]">
          Danh sách các công ty nổi bật
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <CompanyItem className="col-span-4" />
          <CompanyItem className="col-span-4" />
          <CompanyItem className="col-span-4" />
          <CompanyItem className="col-span-4" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
