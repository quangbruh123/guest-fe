import React, { useEffect, useState } from "react";
import JobDetailItem from "./JobDetailItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { postAPI } from "../../../apis";
import useFetchData from "../../../utils/useFetchData";
import { dateVN } from "../../../utils/helper";
import Comment from "./Comment";
import { apiGetRelatedPost } from "../../../apis/post";
import { apiGetPostComment, apiCreateComment } from "../../../apis/comment";
import { setCareers, setInterestedPostId } from "../../../store/authReducer";
import { useDispatch } from "react-redux";

const JobDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [career, setCareer] = useState([]);
  const [relatedPost, setRelatedPost] = useState([]);
  const [comments, setComments] = useState([]);

  const [cmtInput, setCmtInput] = useState({
    postId: id,
    commentText: "",
    rating: null,
  });

  const { data, isLoading, isError } = useFetchData(
    `/post/${id}`,
    null,
    "object",
  );

  let salaryOutput;
  if (!data?.salaryMax && !data?.salaryMin) {
    salaryOutput = "Thoả thuận";
  } else if (!data?.salaryMax && data?.salaryMin) {
    salaryOutput = `từ ${data?.salaryMin} triệu`;
  } else if (!data?.salaryMin && data?.salaryMax) {
    salaryOutput = `tối đa ${data?.salaryMax} triệu`;
  } else {
    salaryOutput = `từ ${data?.salaryMin} đến ${data?.salaryMax} triệu`;
  }

  let sizeOutput;
  if (!data?.Company?.companySizeMin && !data?.Company?.companySizeMax) {
    sizeOutput = "Thoả thuận";
  } else if (!data?.Company?.companySizeMax && data?.Company?.companySizeMin) {
    sizeOutput = `Từ ${data?.Company?.companySizeMin} nhân viên`;
  } else if (!data.companySizeMin && data.companySizeMax) {
    sizeOutput = `Tối đa ${data?.Company?.companySizeMax} nhân viên`;
  } else {
    sizeOutput = `Từ ${data?.Company?.companySizeMin} đến ${data?.Company?.companySizeMax} nhân viên`;
  }

  useEffect(() => {
    const response = apiGetPostComment(id).then((data) => {
      setComments(data?.data);
    });
  }, []);

  useEffect(() => {
    if (data?.Careers) {
      setCareer(data?.Careers);
      dispatch(setInterestedPostId(id));
      dispatch(setCareers(data.Careers));
    }
  }, [data]);

  useEffect(() => {
    const temp = career?.map((el) => {
      return el.id;
    });
    const relate = apiGetRelatedPost(id, temp).then((data) => {
      setRelatedPost(data?.data);
    });
  }, [career]);

  const handleChangeRating = (newRating) => {
    setCmtInput((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  const handleComment = () => {
    const response = apiCreateComment(cmtInput).then((data) => {
      console.log(data);
      const getComment = apiGetPostComment(id).then((data) => {
        console.log(data);
        setComments(data?.data);
      });
    });
  };

  return (
    <div className="block pb-10">
      <div className="m-auto w-[70rem]">
        <div className="mx-auto flex space-x-2">
          <div className="w-[70%] pr-2">
            <div className="mb-4 rounded-lg bg-white px-6 py-5">
              <div className="mb-5 text-xl font-bold">{data?.jobTitle}</div>
              <div className="mb-5 flex items-center">
                <div className="flex w-1/3 items-center gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                    <i className="fa-solid fa-coins"></i>
                  </div>
                  <div className="flex flex-col">
                    <div>Mức lương</div>
                    <div className="font-medium">{salaryOutput}</div>
                  </div>
                </div>
                <div className="flex w-1/3 items-center gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="flex flex-col">
                    <div>Địa điểm</div>
                    <div className="font-medium">{data?.Company?.province}</div>
                  </div>
                </div>
                <div className="flex w-1/3 items-center gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </div>
                  <div className="flex flex-col">
                    <div>Kinh nghiệm</div>
                    <div className="font-medium">
                      {data?.experienceYear == 0
                        ? `dưới 1 năm`
                        : `${data?.experienceYear} năm`}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 rounded-md bg-slate-200 px-2 py-1">
                  <i className="fa-solid fa-clock"></i>
                  <div>Hạn nộp hồ sơ: {dateVN(data?.endDate)}</div>
                </div>
                <div
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
                  onClick={() => navigate(`./apply`)}
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <div>Ứng tuyển ngay</div>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-white p-6">
              <h2 className="mb-5 border-l-[6px] border-blue-700 pl-3 text-xl font-bold">
                Chi tiết tuyển dụng
              </h2>

              <h2 className="pt-2 text-base font-semibold">Phúc lợi</h2>
              <div className="py-2">{data?.benefits}</div>
              <h2 className="pt-2 text-base font-semibold">Mô tả công việc</h2>
              <div className="py-2">{data?.jobDescribe}</div>
              <h2 className="pt-2 text-base font-semibold">
                Yêu cầu chuyên môn
              </h2>
              <div className="py-2">{data?.jobRequirement}</div>
              <h2 className="pt-2 text-base font-semibold">Địa chỉ làm việc</h2>
              <div className="py-2">{data?.Company?.address}</div>
            </div>
            <div className="mb-4 bg-white">
              <div className="m-0 rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#212f3f] to-blue-700 px-5 py-3 text-lg font-semibold text-white">
                Bình luận người dùng ({comments.length})
              </div>
              <div className="px-5 py-4">
                {comments?.map((data) => {
                  return <Comment info={data}></Comment>;
                })}
              </div>
              <div className="px-5 pb-4 text-lg font-semibold">
                Viết bình luận
              </div>
              <div className="flex items-start gap-4 border-b-[1px] px-5 pb-6">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="h-fit w-[85%]">
                  <textarea
                    className="h-[100%] w-[100%] border-[1px] border-slate-200 p-2"
                    onChange={(e) => {
                      setCmtInput((prev) => ({
                        ...prev,
                        commentText: e.target.value,
                      }));
                    }}
                  ></textarea>
                  <div className="flex gap-2 text-base">
                    <span>Đánh giá: </span>
                    <ReactStars onChange={handleChangeRating}></ReactStars>
                  </div>
                </div>
                <div
                  className="cursor-pointer rounded-lg bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-500"
                  onClick={handleComment}
                >
                  Gửi
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="mb-6 rounded-lg bg-white p-4">
              <div className="mb-2 flex items-start gap-4">
                <div className="h-[88px] w-[88px] overflow-clip rounded-lg border-[1px] border-slate-200">
                  <img
                    src={data?.Company?.imageLink}
                    className="h-[100%] w-[100%] object-contain"
                  ></img>
                </div>
                <div className="w-[60%] text-base font-medium">
                  {data?.Company?.companyName}
                </div>
              </div>
              <div className="space-y-2 py-2">
                <div className="flex items-start gap-4">
                  <div className="flex w-[35%] items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-user-group w-[16px] text-center"></i>
                    <div>Quy mô:</div>
                  </div>
                  <div className="w-[65%]">{sizeOutput}</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex w-[35%] items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-location-dot w-[16px] text-center"></i>
                    <div>Địa điểm: </div>
                  </div>
                  <div className="w-[65%]">{data?.Company?.address}</div>
                </div>
              </div>
              <Link
                className="flex cursor-pointer items-center justify-center gap-2 font-semibold text-blue-600 hover:underline"
                to={`/cong-ty/${data?.Company?.id}`}
              >
                <div>Xem trang công ty</div>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </div>

            <div className="mb-6 space-y-5 rounded-lg bg-white p-5">
              <div className="text-lg font-bold">Thông tin chung</div>
              <div className="flex items-center gap-4">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                  <i className="fa-solid fa-id-badge"></i>
                </div>
                <div className="flex flex-col">
                  <div>Cấp bậc</div>
                  <div className="font-medium">
                    {data?.Position?.positionName}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                  <i className="fa-solid fa-hourglass-half"></i>
                </div>
                <div className="flex flex-col">
                  <div>Kinh nghiệm</div>
                  <div className="font-medium">
                    {data?.experienceYear == 0
                      ? `dưới 1 năm`
                      : `${data?.experienceYear} năm`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                  <i className="fa-solid fa-user-group"></i>
                </div>
                <div className="flex flex-col">
                  <div>Số lượng tuyển</div>
                  <div className="font-medium">
                    {data?.requiredAmount} người
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="flex flex-col">
                  <div>Hình thức làm việc</div>
                  <div className="font-medium">
                    {data?.WorkingType?.workingTypeName}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white">
                  <i className="fa-solid fa-venus-mars"></i>
                </div>
                <div className="flex flex-col">
                  <div>Giới tính</div>
                  <div className="font-medium">
                    {data?.gender ? "Nữ" : "Nam"}
                  </div>
                </div>
              </div>
              <div className="text-lg font-bold">Ngành nghề</div>
              <div className="flex flex-wrap gap-2">
                {data?.Careers?.map((data, index) => {
                  return (
                    <div
                      className="rounded-lg bg-gray-200 px-2 py-1 text-sm"
                      key={index}
                    >
                      {data.careerName}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg bg-white ">
              <div className="font border-b-[1px] border-gray-200 p-4">
                Các công việc tương tự
              </div>

              <div className="">
                {relatedPost ? (
                  relatedPost?.slice(0, 5).map((el) => {
                    return (
                      <JobDetailItem
                        jobName={el.jobTitle}
                        companyName={el.Company.companyName}
                        salaryMax={el.salaryMax}
                        salaryMin={el.salaryMin}
                        imageLink={el.Company.imageLink}
                        postId={el.id}
                        district={el.Company.district}
                      ></JobDetailItem>
                    );
                  })
                ) : (
                  <div>Không có</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
