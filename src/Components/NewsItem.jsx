import React from "react";

const NewsItem = () => {
  return (
    <div className="flex">
      <div className="thumb w-1/3 pr-4"></div>
      <div className="info w-2/3 pl-4">
        <h3 className="text-text-hoi-black text-lg font-medium">
          Kĩ năng cần bind
        </h3>
        <p className="text-text-hoi-black text-sm">description cần bind</p>
      </div>
    </div>
  );
};

export default NewsItem;
