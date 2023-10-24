const NewsItem = () => {
  return (
    <div className="flex border-b-[1px] border-solid border-[#e7e7e7] py-4">
      <div className="thumb w-1/3 pr-4">
        <img
          src="https://sieuthivieclam.vn/images/content/ZLSr0_Tu_n_67-02.png"
          alt=""
        />
      </div>
      <div className="info w-2/3 pl-4">
        <h3 className="text-lg font-medium text-text-hoi-black">
          <a href="#" target="_blank" className="p-0 font-medium">
            Kĩ năng cần bind
          </a>
        </h3>
        <p className="text-sm text-text-hoi-black">
          BẠN BIẾT VỀ NHỮNG KỸ NĂNG NÀO ĐỂ KHÔNG BỊ ĐUỔI VIỆC?
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
