import NewsItem from "../../Components/News/NewsItem";
import JobItem from "../../Components/News/JobItem";
import { NavLink } from "react-router-dom";
const News = () => {
  return (
    <div className="w-100 block">
      <div className="m-auto w-[1210px]">
        <h2 className="mb-6 text-2xl font-medium">Tin tức - Sự kiện</h2>
        <div className="w-100 flex gap-8">
          <div className="w-2/3">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
          <div className="w-1/3">
            <div className="border bg-white">
              <h3 className="border-b-[1px] border-solid border-[#cecece] bg-transparent px-4 py-2 font-medium text-[#4a4a4a]">
                Các công việc mới nhất
              </h3>
              <div className="related-jobs">
                <ul className="m-0 list-none p-0">
                  <JobItem />
                  <JobItem />
                  <JobItem />
                  <JobItem />
                </ul>
              </div>
              <div className="show-all mb-16 mt-2 text-center">
                <NavLink
                  to={"/"}
                  className={
                    "inline-block rounded-[4px] bg-[#ededed] px-7 py-3 no-underline"
                  }
                >
                  &gt;&gt;Xem tất cả
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
