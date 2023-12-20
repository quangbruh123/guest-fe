import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getStaticData } from "../../../store/staticData";
import { getUserInfo, setUser } from "../../../store/authReducer";
import { apiUpdateCandidate, getCurrentUser } from "../../../apis/auth";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const staticData = useSelector(getStaticData);
  const userInfos = useSelector(getUserInfo);

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

  const handleUpdateUserInformation = async () => {
    toast.loading("Đang xử lý thông tin");
    const formData = new FormData();
    Object.entries(userInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = apiUpdateCandidate(userInfo).then((responses) => {
      console.log(responses);
      toast.dismiss();
      if (responses.status == 204) {
        const user = getCurrentUser().then((data) => {
          console.log(data);
          if (data.status === 200) {
            dispatch(setUser(data?.data));
          }
        });
        Swal.fire({
          text: `Sửa thông tin thành công`,
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
        <div className="w-[70%] pr-4">
          <div className="rounded-lg bg-white px-7 py-5">
            <h1 className="mb-3 text-xl font-bold">
              Cài đặt thông tin cá nhân
            </h1>
            <div className="mb-3 flex gap-1">
              <span className="font-semibold text-red-500">(*)</span>
              <span className="font-medium text-[#4D5965]">
                Các thông tin bắt buộc
              </span>
            </div>
            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-3/4 space-y-2">
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
              <div className="w-1/4 space-y-2">
                <div className="flex gap-1">
                  <label className="">Giới tính</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    name="gender"
                    placeholder="Nam/nữ"
                    options={[
                      { value: false, label: "Nam" },
                      { value: true, label: "Nữ" },
                    ]}
                    defaultValue={
                      userInfo.gender
                        ? { value: true, label: "Nữ" }
                        : { value: false, label: "Nam" }
                    }
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        gender: e.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-1/5 space-y-2">
                <div className="flex gap-1">
                  <label className="">Tuổi</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full w-full flex-auto focus:outline-none"
                    placeholder="Nhập tuổi"
                    name="age"
                    value={userInfo.age}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
              <div className="w-2/5 space-y-2">
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
              <div className="w-2/5 space-y-2">
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
            </div>

            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-1/3 space-y-2">
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
              <div className="w-2/3 space-y-2">
                <div className="flex gap-1">
                  <label className="">Địa chỉ</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập địa chỉ"
                    name="fullAddress"
                    value={userInfo.fullAddress}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="mb-5 flex w-[100%] space-x-5">
              <div className="w-1/3 space-y-2">
                <label className="">Tỉnh thành</label>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    defaultValue={{
                      label: "Thành phố Hồ Chí Minh",
                    }}
                    name="province"
                    placeholder="Tỉnh thành..."
                    options={[
                      {
                        value: 79,
                        label: "Thành phố Hồ Chí Minh",
                      },
                    ]}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        province: e.label,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="w-1/3 space-y-2">
                <label className="">Quận / huyện</label>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    name="district"
                    placeholder="Quận huyện..."
                    options={staticData?.districts?.map((el, index) => {
                      return {
                        value: el.code,
                        label: el.name,
                        wards: [...el.wards],
                      };
                    })}
                    defaultValue={{ label: userInfo?.district }}
                    onChange={(e) => {
                      setUserInfo((prev) => ({
                        ...prev,
                        district: e.label,
                      }));
                      setWards(e.wards);
                    }}
                  />
                </div>
              </div>
              <div className="w-1/3 space-y-2">
                <label className="">Thị xã / phường</label>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    name="ward"
                    placeholder="Thị xã / phường..."
                    options={wards?.map((el, index) => {
                      return {
                        value: el.code,
                        label: el.name,
                      };
                    })}
                    defaultValue={{ label: userInfo?.ward }}
                    onChange={(e) => {
                      setUserInfo((prev) => ({
                        ...prev,
                        ward: e.label,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 flex w-[100%] gap-6">
              <div className="w-1/3 space-y-2">
                <div className="flex gap-1">
                  <label className="">Thâm niên</label>
                  <div className="font-medium text-red-500">*</div>
                </div>
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-user p-4 text-blue-700"></i>
                  <input
                    className="h-full flex-auto focus:outline-none"
                    placeholder="Nhập thâm niên (năm)"
                    name="experienceYear"
                    value={userInfo.experienceYear}
                    onChange={(e) => handleChangeUserInfo(e)}
                  ></input>
                </div>
              </div>
              <div className="w-2/3 space-y-2">
                <label className="">Trình độ học vấn</label>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    name="academicLevelId"
                    placeholder="Trình độ học vấn..."
                    options={staticData?.academicLevels?.map((data, index) => {
                      return {
                        value: data.id,
                        label: data.academicLevelName,
                      };
                    })}
                    defaultValue={{
                      label:
                        staticData?.academicLevels[
                          userInfo?.academicLevelId - 1
                        ].academicLevelName,
                    }}
                    onChange={(e) => {
                      setSignUpInfo((prev) => ({
                        ...prev,
                        academicLevelId: e.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-7 flex w-[100%] space-x-5">
              <div className="w-1/2 space-y-2">
                <label className="">Vị trí mong muốn</label>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    name="positionId"
                    placeholder="Thực tập, nhân viên..."
                    options={staticData?.positions?.map((data, index) => {
                      return {
                        value: data.id,
                        label: data.positionName,
                      };
                    })}
                    defaultValue={{
                      label:
                        staticData?.positions[userInfo?.positionId - 1]
                          .positionName,
                    }}
                    onChange={(e) => {
                      setUserInfo((prev) => ({
                        ...prev,
                        positionId: e.value,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="w-1/2 space-y-2">
                <label className="">Lĩnh vực</label>
                <div className="flex w-[100%] items-center rounded-md">
                  <Select
                    className="h-full w-[100%] flex-auto focus:outline-none"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: 6,
                      }),
                    }}
                    isMulti
                    name="careerList"
                    placeholder="CNTT, Giáo dục..."
                    options={staticData?.careers?.map((data, index) => {
                      return {
                        value: data.id,
                        label: data.careerName,
                      };
                    })}
                    defaultValue={userInfos?.Careers?.map((el, idx) => {
                      return {
                        value: el.id,
                        label: el.careerName,
                      };
                    })}
                    onChange={(e) => {
                      const arrTemp = [];
                      e.map((el) => {
                        arrTemp.push(el.value);
                      });
                      setUserInfo((prev) => ({
                        ...prev,
                        careerList: arrTemp,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 w-[100%] space-y-2">
              <div className="w-1/2 space-y-2">
                <div className="flex gap-1">
                  <label
                    className=""
                    onClick={() => console.log(userInfo.cvImage)}
                  >
                    Ảnh CV
                  </label>
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
                    accept="image/*"
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
                    accept="image/*"
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
                console.log(userInfos);
                handleUpdateUserInformation();
              }}
            >
              <button className="w-full py-2 font-semibold">Lưu</button>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="rounded-lg bg-white p-5">Hình ứng viên</div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EditUser;
