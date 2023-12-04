import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const CompanyItem = ({ company, className }) => {
  return (
    <div
      className={
        "mb-6 h-[400px] overflow-hidden rounded bg-white shadow-md shadow-black/20 " +
        className
      }
    >
      <div className="banner relative mb-4 h-[180px] overflow-hidden">
        <NavLink to={`/cong-ty/${company.id}`}>
          <div className="wrapper h-[150px]">
            <img
              src="https://sieuthivieclam.vn/templates/sieuthivieclam/images/avatar.jpg"
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>
        </NavLink>
        <div className="company-logo absolute bottom-0 left-[16px] h-[64px] w-[64px] border border-[#eee] bg-white">
          <NavLink to={`/cong-ty/${company.id}`}>
            <img
              src={company.imageLink}
              alt="logo"
              className="h-full max-w-full align-middle"
            />
          </NavLink>
        </div>
      </div>

      <div className="info px-4">
        <h3>
          <NavLink
            to={`/cong-ty/${company.id}`}
            className={"text-left text-sm font-bold uppercase text-[#333]"}
          >
            {company.companyName}
          </NavLink>
        </h3>
        <div className="description pt-4 text-sm text-[#555]">
          <p className="line-clamp-5">{parse(company.introduction)}</p>
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
