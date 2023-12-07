import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const JobItem = ({ id, jobName, companyName, salaryMin, salaryMax }) => {
  const navigate = useNavigate();
  let salaryOutput;
  if (!salaryMax && !salaryMin) {
    salaryOutput = "Thoả thuận";
  } else if (!salaryMax && salaryMin) {
    salaryOutput = `từ ${salaryMin}`;
  } else if (!salaryMin && salaryMax) {
    salaryOutput = `tối đa ${salaryMax}`;
  } else {
    salaryOutput = `từ ${salaryMin} đến ${salaryMax}`;
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
          <span className="text-gray-400">{companyName}</span>
          <span>Lương: {salaryOutput}</span>
        </div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  jobName: PropTypes.string,
  companyName: PropTypes.string,
  salaryMin: PropTypes.number,
  salaryMax: PropTypes.number,
};

export default JobItem;
