import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getStaticData } from "../../../store/staticData";
import { getUserInfo, setUser } from "../../../store/authReducer";
import { apiUpdateCandidate, getCurrentUser } from "../../../apis/auth";
import { apiApplyPostByCandidate } from "../../../apis/post";

const ApplyPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const staticData = useSelector(getStaticData);
  const userInfos = useSelector(getUserInfo);
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState({
    civilId: userInfos?.civilId, //
    candidateName: userInfos?.candidateName, //
    age: userInfos?.age, //
    profileImage: userInfos.profileImage,
    cvImage: userInfos.cvImage,
    phoneNumber: userInfos?.phoneNumber, //
    email: userInfos?.email, //
    fullAddress: userInfos?.fullAddress, //
    province: userInfos?.province,
    district: userInfos?.district,
    ward: userInfos?.ward,
    gender: userInfos?.gender, //
    experienceYear: userInfos?.experienceYear, //
    academicLevelId: userInfos?.academicLevelId,
    positionId: userInfos?.positionId,
    careerList: userInfos?.Careers?.map((el, idx) => {
      return el.id;
    }),
  });

  useEffect(() => {
    const res = staticData?.districts?.find((el) => {
      return el.name == userInfo.district;
    });
    setWards(res?.wards);
  }, [userInfo, staticData]);

  const [wards, setWards] = useState([]);

  const handleChangeUserInfo = (e) => {
    const value = e.target.value;
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleApplyPost = async () => {
    toast.loading("Đang xử lý thông tin");
    const formData = new FormData();
    Object.entries(userInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = apiUpdateCandidate(userInfo).then((responses) => {
      console.log(id);
      console.log(responses);
      toast.dismiss();
      if (responses.status == 204) {
        const user = getCurrentUser()
          .then((data) => {
            console.log(data);
            if (data.status === 200) {
              dispatch(setUser(data?.data));
            }
          })
          .then(() => {
            const apply = apiApplyPostByCandidate(id).then((data) => {
              console.log(data);
            });
          });
        Swal.fire({
          text: `Ứng tuyển thành công`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(-1);
          }
        });
      } else {
        toast.error(`Có lỗi xảy ra. Mã lỗi: ${responses.status}`);
      }
    });
  };

  return (
    <div className="mx-auto h-fit w-[75rem] pb-8">
      <div className="flex">
        <div className="w-full">
          <div className="rounded-lg bg-white px-7 py-5">
            <h1 className="mb-1 text-xl font-bold">
              Xác nhận thông tin ứng tuyển
            </h1>
            <h1 className="mb-3 text-[#4D5965]">
              Hãy xác nhận các thông tin cần thiết trước khi ứng tuyển.
            </h1>
            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-full space-y-2">
                <div className="flex gap-1">
                  <label className="">Họ tên</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập số điện thoại"
                    name="phoneNumber"
                    value={userInfo.candidateName}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-3/5 space-y-2">
                <div className="flex gap-1">
                  <label className="">Email</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập email"
                    name="email"
                    value={userInfo.email}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
              <div className="w-1/5 space-y-2">
                <div className="flex gap-1">
                  <label className="">CMND/CCCD</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập số CMND/CCCD"
                    name="civilId"
                    value={userInfo.civilId}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
              <div className="w-1/5 space-y-2">
                <div className="flex gap-1">
                  <label className="">Số điện thoại</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập số điện thoại"
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="mb-5 w-[100%] space-y-2">
              <div className="w-1/2 space-y-2">
                <div className="flex gap-1">
                  <label className="">Ảnh CV</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    type="file"
                    className="h-full flex-auto focus:outline-none"
                    name="cvImage"
                    onChange={(e) => {
                      setUserInfo((prev) => ({
                        ...prev,
                        cvImage: e.target.files[0],
                      }));
                    }}
                  ></input>
                </div>
              </div>
              <img
                src={
                  typeof userInfo.cvImage == "string"
                    ? userInfo.cvImage
                    : URL.createObjectURL(userInfo.cvImage)
                }
              ></img>
            </div>

            <div className="mb-5 w-[100%] space-y-2">
              <div className="w-1/2 space-y-2">
                <div className="flex gap-1">
                  <label className="">Ảnh hồ sơ ứng viên</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    type="file"
                    className="h-full flex-auto focus:outline-none"
                    name="profileImage"
                    onChange={(e) => {
                      setUserInfo((prev) => ({
                        ...prev,
                        profileImage: e.target.files[0],
                      }));
                    }}
                  ></input>
                </div>
              </div>
              <img
                src={
                  typeof userInfo.profileImage == "string"
                    ? userInfo.profileImage
                    : URL.createObjectURL(userInfo.profileImage)
                }
              ></img>
            </div>

            <div
              className="mb-5 flex w-[10%] items-center justify-center rounded-md bg-blue-600 text-white"
              onClick={() => {
                console.log(userInfo);
                handleApplyPost();
              }}
            >
              <button className="w-full py-2 font-semibold">Ứng tuyển</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ApplyPost;
