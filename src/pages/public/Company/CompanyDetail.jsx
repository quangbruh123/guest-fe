import { useParams } from "react-router-dom";
import JobItem from "../../../Components/Company/JobItem";

import CompanyParagraph from "../../../Components/Company/CompanyParagraph";
import useFetchData from "../../../utils/useFetchData";

const CompanyDetail = () => {
  const { cid } = useParams();

  const { data, isLoading, isError } = useFetchData(
    `http://localhost:5000/api/v1/company/${cid}`,
    "object",
  );
  console.log(data);

  let sizeOutput;
  if (!data.companySizeMin && !data.companySizeMax) {
    sizeOutput = "Thoả thuận";
  } else if (!data.companySizeMax && data.companySizeMin) {
    sizeOutput = `Từ ${data.companySizeMin} nhân viên`;
  } else if (!data.companySizeMin && data.companySizeMax) {
    sizeOutput = `Tối đa ${data.companySizeMax} nhân viên`;
  } else {
    sizeOutput = `Từ ${data.companySizeMin} đến ${data.companySizeMax} nhân viên`;
  }
  return (
    <div className="m-auto w-main">
      <div className="cover-inner mb-6 min-h-[358px] rounded-xl bg-gradient-to-r from-[#212f3f] to-blue-700">
        <div className="cover-wrapper h-[224px] overflow-hidden">
          <img
            src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/avatar.jpg"
            alt=""
            draggable="false"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="logo relative">
          <div className="absolute -top-[90px] left-[40px] flex h-[180px] w-[180px] items-center justify-center rounded-[100px] border-4 border-white bg-white">
            <img
              src={data.imageLink}
              alt="Ảnh công ty"
              draggable="false"
              className="h-4/5 w-4/5 rounded-[100px] object-contain"
            />
          </div>
        </div>
        <div className="my-8 flex items-center gap-x-8 pl-[252px] pr-10">
          <div className="flex-1">
            <h1 className="mb-4 line-clamp-1 max-w-full overflow-hidden text-2xl font-semibold text-white">
              {data.companyName}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex">
                <i className="fa-solid fa-globe mr-2 text-[20px] text-white"></i>
                <a
                  className={
                    "line-clamp-1 overflow-hidden text-sm font-normal text-white"
                  }
                  target="_blank"
                  href={`mailto:${data.email}`}
                  rel="noreferrer"
                >
                  {data.email}
                </a>
              </div>
              <div className="flex">
                <i className="fa-solid fa-building mr-2 text-[20px] text-white "></i>
                <span
                  className={
                    "line-clamp-1 overflow-hidden text-sm font-normal text-white"
                  }
                >
                  {sizeOutput}
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
              <h2 className="m-0 bg-gradient-to-r from-[#212f3f] to-blue-700 px-5 py-3 text-lg font-semibold text-white">
                Giới thiệu công ty
              </h2>
              <div className="box-body px-5 pb-7 pt-5">
                <CompanyParagraph paragraph={data.introduction} />
              </div>
            </div>

            <div className="job-listing">
              {Array.isArray(data.Posts) && data.Posts?.length > 0 && (
                <>
                  <h2 className="m-0 rounded-t-[10px] bg-gradient-to-r from-[#212f3f] to-blue-700 px-5 py-3 text-lg font-semibold text-white">
                    Tuyển dụng
                  </h2>
                  <div className="box-body mb-11 rounded-b-[10px] border border-[#e9eaec] bg-white px-5 py-8">
                    <div className="mb-4 grid grid-cols-12 gap-2">
                      <div className="col-span-10 flex items-center gap-4 rounded-[6px] border py-1 pl-3 pr-0">
                        <div>
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input
                          type="text"
                          placeholder="Nhập tên công việc"
                          className="flex-1 border-none outline-none"
                        />
                      </div>
                      <div className="col-span-2">
                        <button className="flex items-center gap-3 rounded-lg bg-blue-700 px-3 py-4 text-base font-normal text-white">
                          <i className="fa-solid fa-magnifying-glass"></i>
                          Tìm kiếm
                        </button>
                      </div>
                    </div>
                    <div className="job-list">
                      {data.Posts?.map((el) => {
                        return <JobItem key={el.id} />;
                      })}
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
                </>
              )}
            </div>
          </div>
          <div className="right col-span-4">
            <div className="mb-8 overflow-hidden">
              <h2 className="m-0 rounded-t-md bg-gradient-to-r from-[#212f3f] to-blue-700 px-5 py-3 text-lg font-semibold text-white">
                Giới thiệu công ty
              </h2>
              <div className="box-body rounded-b-md border border-[#e9eaec] px-5 pb-2">
                <div className="py-5">
                  <div className="mb-2 flex items-center">
                    <i className="fa-solid fa-location-dot mr-2 text-2xl"></i>
                    <span className="text-sm text-black">Địa chỉ công ty</span>
                  </div>
                  <div className="text-sm font-normal text-[#4d5965]">
                    {data.address}
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
