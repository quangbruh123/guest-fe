import PropTypes from "prop-types";
const Paginator = ({ currentPage, totalPage, setNextPage, setBackPage }) => {
  return (
    <div className="mt-5 flex justify-center gap-6">
      <button
        className=" font-xl rounded-full border-blue-dam text-blue-dam outline-none"
        onClick={setBackPage}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <span className="text-xl text-[#ccc]">
        {currentPage}/{totalPage} trang
      </span>

      <button
        className=" font-xl rounded-full border-blue-dam text-blue-dam outline-none"
        onClick={setNextPage}
        disabled={currentPage === totalPage}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  setNextPage: PropTypes.func,
  setBackPage: PropTypes.func,
};

export default Paginator;
