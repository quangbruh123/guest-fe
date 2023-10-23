import Footer from "../../Components/footer";
import NewsItem from "../../Components/NewsItem";
const News = () => {
  return (
    <div className="w-100 block">
      <div className="m-auto w-[1210px]">
        <h2 className="mb-6 text-2xl font-medium">Tin tức - Sự kiện</h2>
        <div className="w-100 flex gap-8">
          <div className="w-2/3">
            <NewsItem />
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default News;
