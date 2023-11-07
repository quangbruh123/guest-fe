import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const CompanyItem = ({ company, className }) => {
  return (
    <div
      className={
        "mb-6 h-[400px] overflow-hidden rounded bg-white shadow-md shadow-black/20 " +
        className
      }
    >
      <div className="banner relative mb-4 h-[180px] overflow-hidden">
        <NavLink>
          <div className="wrapper h-[150px]">
            <img
              src="https://static.topcv.vn/company_covers/cong-ty-co-phan-nguoi-ban-vang-9167318c1370716a55560d6f43a79325-64058f6d095a9.jpg"
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>
        </NavLink>
        <div className="company-logo absolute bottom-0 left-[16px] h-[64px] w-[64px] border border-[#eee] bg-white">
          <NavLink>
            <img
              src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/avatar.jpg"
              alt="logo"
              className="h-full max-w-full align-middle"
            />
          </NavLink>
        </div>
      </div>

      <div className="info px-4">
        <h3>
          <NavLink
            className={"text-left text-sm font-bold uppercase text-[#333]"}
          >
            Test
          </NavLink>
        </h3>
        <div className="description pt-4 text-sm text-[#555]">
          <p className="line-clamp-5">
            Công Ty CP Người Bạn Vàng được thành lập năm 2017, tới 2018 chúng
            tôi tự hào trở thành đối tác chiến lược của PNJ Việt Nam.Trải qua
            hơn 5 năm phát triển, cho tới hiện tại chuỗi Cầm đồ và Thu mua Người
            Bạn Vàng đã mở rộng mô hình cầm đồ hiện đại tới trên 25 tỉnh thành
            với 65 cửa hàng hoạt động. Người Bạn Vàng nhận...
          </p>
        </div>
      </div>
    </div>
  );
};

CompanyItem.propTypes = {
  className: PropTypes.string,
  company: PropTypes.object,
};

export default CompanyItem;
