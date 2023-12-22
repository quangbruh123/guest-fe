import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const JobItem = ({
  id,
  jobName,
  companyName,
  salaryMin,
  salaryMax,
  district,
}) => {
  const navigate = useNavigate();
  let salaryOutput;
  if (!salaryMax && !salaryMin) {
    salaryOutput = "Thoả thuận";
  } else if (!salaryMax && salaryMin) {
    salaryOutput = `từ ${salaryMin} triệu`;
  } else if (!salaryMin && salaryMax) {
    salaryOutput = `tối đa ${salaryMax} triệu`;
  } else {
    salaryOutput = `từ ${salaryMin} đến ${salaryMax} triệu`;
  }
  return (
    <div
      className="col-span-6 cursor-pointer bg-white px-4 hover:bg-blue-200"
      onClick={() => navigate(`/jobs/detail/${id}`)}
    >
      <div className="flex items-center py-4">
        <div className="flex h-full w-[80%] flex-col space-y-2">
          <span className="line-clamp-1 w-[100%] overflow-hidden text-2xl font-medium">
            {jobName}
          </span>
          <span className="line-clamp-1 text-gray-400">{companyName}</span>
          <div className="flex gap-2">
            <div className="rounded-lg bg-gray-200 px-2 py-1 font-medium text-[#212F3F]">
              {salaryOutput}
            </div>
            <div className="rounded-lg bg-gray-200 px-2 py-1 font-medium text-[#212F3F]">
              {district}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  id: PropTypes.string,
  jobName: PropTypes.string,
  companyName: PropTypes.string,
  salaryMin: PropTypes.number,
  salaryMax: PropTypes.number,
};

export default JobItem;
