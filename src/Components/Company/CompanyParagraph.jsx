import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
const CompanyParagraph = ({ paragraph }) => {
  const contentDiv = useRef(null);
  const overflow = useRef(false);
  const [expand, setExpand] = useState(null);
  useEffect(() => {
    if (contentDiv.current.clientHeight >= 200) {
      overflow.current = true;
    }
  }, []);
  return (
    <>
      <div className={"relative"} ref={contentDiv}>
        <p
          className={"mb-3 overflow-hidden " + (expand ? "h-fit" : "h-[250px]")}
        >
          {paragraph}
        </p>

        {overflow.current && !expand && (
          <div className="absolute bottom-0 h-[48px] w-full bg-gradient-to-b from-transparent to-white"></div>
        )}
      </div>
      {overflow.current && (
        <button
          className="mt-4 border-none text-sm font-medium text-blue-dam outline-none"
          onClick={() => {
            setExpand((prev) => !prev);
            console.log(expand);
          }}
        >
          Xem thêm
          <i className="fa-solid fa-chevron-down ml-2"></i>
        </button>
      )}
    </>
  );
};

CompanyParagraph.propTypes = {
  paragraph: PropTypes.string,
};
export default CompanyParagraph;
