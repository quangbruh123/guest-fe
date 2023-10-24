const JobItem = () => {
  return (
    <li className=" border-t-[1px] border-solid border-[#cecece] px-4 py-6">
      <h3 className="mb-3">
        <a
          href="#"
          className=" text-sm font-medium text-[#0B6FBA] hover:underline"
        >
          Công việc ccc
        </a>
      </h3>
      <div className="flex gap-4">
        <img
          src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/avatar.jpg"
          alt=""
          className="h-[60px] w-[86px]"
        />
        <div>
          <p className=" mb-2 text-xs text-[#828282]">Tên công việc</p>
          <p className=" mb-2 text-xs text-[#828282]">
            <i className="fa-solid fa-location-dot"></i>
            <span>&nbsp;Hồ Chí Minh</span>
          </p>
          <p className=" mb-2 text-xs text-[#828282]">
            <i className="fa-solid fa-coins"></i>
            <span>&nbsp;Lương: Thoả thuận </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
