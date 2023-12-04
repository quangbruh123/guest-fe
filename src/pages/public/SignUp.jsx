import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select";
import { useSelector } from "react-redux";
import { authAPI } from "../../apis";

import { getStaticData } from "../../store/staticData";
import SelectCustom from "../../Components/Select";
import LoginImg from "../../assets/login-img.svg";
import "./index.css";

const SignUp = () => {
  const staticData = useSelector(getStaticData);
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    civilId: "",
    candidateName: "",
    age: "",
    profileImage:
      "https://pluspng.com/img-png/png-user-icon-male-user-icon-512.png",
    cvImage: "https://pluspng.com/img-png/png-user-icon-male-user-icon-512.png",
    phoneNumber: "",
    email: "",
    fullAddress: "",
    province: "",
    district: "",
    ward: "",
    gender: null,
    experienceYear: null,
    academicLevelId: null,
    positionId: null,
    careerList: [],
  });

  const [wards, setWards] = useState([]);

  const handleChangeSignUpInfo = (e) => {
    const value = e.target.value;
    setSignUpInfo((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleSignUp = async () => {
    const response = await authAPI.apiSignUp(signUpInfo).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="flex h-screen w-screen items-center overflow-y-clip">
      <div className="h-screen w-[60%] overflow-scroll pt-12">
        <div className="mx-auto w-[60%]">
          <div className="mb-5">
            <h2 className="mb-1 text-[22px] font-semibold text-blue-600">
              Chào mừng bạn đến với Trung tâm giới thiệu việc làm
            </h2>
            <span className="text-[#6F7882]">
              Cùng nhau xây dựng tương lai việc làm ngay tại Trung tâm giới
              thiệu việc làm
            </span>
          </div>

          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Email</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i className="fa-solid fa-envelope p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto focus:outline-none"
                placeholder="Nhập email"
                name="email"
                onChange={(e) => handleChangeSignUpInfo(e)}
              ></input>
            </div>
          </div>

          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Username</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i className="fa-solid fa-user p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto focus:outline-none"
                placeholder="Nhập username"
                name="username"
                onChange={(e) => handleChangeSignUpInfo(e)}
              ></input>
            </div>
          </div>

          <div className="mb-5 w-[100%] space-y-2">
            <label className="">Mật khẩu</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i className="fa-solid fa-lock p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto pr-2 focus:outline-none"
                placeholder="Nhập mật khẩu"
                type="password"
                name="password"
                onChange={(e) => handleChangeSignUpInfo(e)}
              ></input>
            </div>
          </div>

          <div className="mb-7 w-[100%] space-y-2">
            <label className="">Xác nhận mật khẩu</label>
            <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
              <i className="fa-solid fa-lock p-4 text-blue-700"></i>
              <input
                className="h-full flex-auto pr-2 focus:outline-none"
                placeholder="Nhập lại mật khẩu"
                type="password"
              ></input>
            </div>
          </div>

          <div className="mb-5 flex w-[100%] border-b-2 border-blue-500 pb-2 text-xl font-semibold">
            Thông tin cá nhân
          </div>

          <div className="mb-7 flex w-[100%] gap-6">
            <div className="w-[50%] space-y-2">
              <label className="">Họ tên</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-signature p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto pr-2 focus:outline-none"
                  placeholder="Nhập họ tên..."
                  type="text"
                  name="candidateName"
                  onChange={(e) => handleChangeSignUpInfo(e)}
                ></input>
              </div>
            </div>
            <div className="w-[50%] space-y-2">
              <label className="">Số CMND/CCCD</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-id-card p-4 text-blue-700"></i>
                <input
                  className="h-full flex-auto pr-2 focus:outline-none"
                  placeholder="Nhập số CCCD/CMND"
                  type="text"
                  name="civilId"
                  onChange={(e) => handleChangeSignUpInfo(e)}
                ></input>
              </div>
            </div>
          </div>

          <div className="mb-7 flex w-[100%] space-x-5">
            <div className="w-[30%] space-y-2">
              <label className="">Tuổi</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-calendar p-4 text-blue-700"></i>
                <input
                  className="h-full w-[100%] flex-auto pr-2 focus:outline-none"
                  placeholder="Tuổi..."
                  type="text"
                  name="age"
                  onChange={(e) =>
                    setSignUpInfo((prev) => ({
                      ...prev,
                      age: Number(e.target.value),
                    }))
                  }
                ></input>
              </div>
            </div>
            <div className="w-[30%] space-y-2">
              <label className="">Giới tính</label>
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
                  onChange={(e) =>
                    setSignUpInfo((prev) => ({
                      ...prev,
                      gender: e.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="w-[40%] space-y-2">
              <label className="">Số điện thoại</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-phone p-4 text-blue-700"></i>
                <input
                  className="h-full w-[100%] flex-auto pr-2 focus:outline-none"
                  placeholder="Nhập số điện thoại"
                  type="text"
                  name="phoneNumber"
                  onChange={(e) => handleChangeSignUpInfo(e)}
                ></input>
              </div>
            </div>
          </div>

          <div className="mb-7 flex w-[100%] space-x-5">
            <div className="w-[100%] space-y-2">
              <label className="">Địa chỉ liên hệ</label>
              <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                <i className="fa-solid fa-map-location p-4 text-blue-700"></i>
                <input
                  className="h-full w-[100%] flex-auto pr-2 focus:outline-none"
                  placeholder="Nhập địa chỉ liên hệ..."
                  type="text"
                  name="fullAddress"
                  onChange={(e) => handleChangeSignUpInfo(e)}
                ></input>
              </div>
            </div>
          </div>

          <div className="mb-7 flex w-[100%] space-x-5">
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
                  name="province"
                  placeholder="Tỉnh thành..."
                  options={[
                    {
                      value: 79,
                      label: "Thành phố Hồ Chí Minh",
                    },
                  ]}
                  onChange={(e) =>
                    setSignUpInfo((prev) => ({
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
                  onChange={(e) => {
                    setSignUpInfo((prev) => ({
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
                  onChange={(e) => {
                    setSignUpInfo((prev) => ({
                      ...prev,
                      ward: e.label,
                    }));
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mb-7 flex w-[100%] space-x-5">
            <div className="w-[40%] space-y-2">
              <label className="">Thâm niên</label>
              <div className="flex w-[100%] items-center rounded-md">
                <div className="flex w-[100%] items-center rounded-md border-[1px] border-gray-300">
                  <i className="fa-solid fa-briefcase p-4 text-blue-700"></i>
                  <input
                    className="h-full w-[100%] flex-auto pr-2 focus:outline-none"
                    placeholder="Thâm niên (năm)..."
                    type="text"
                    name="experienceYear"
                    onChange={(e) =>
                      setSignUpInfo((prev) => ({
                        ...prev,
                        experienceYear: Number(e.target.value),
                      }))
                    }
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-[60%] space-y-2">
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
                  onChange={(e) => {
                    setSignUpInfo((prev) => ({
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
                  onChange={(e) => {
                    const arrTemp = [];
                    e.map((el) => {
                      arrTemp.push(el.value);
                    });
                    setSignUpInfo((prev) => ({
                      ...prev,
                      careerList: arrTemp,
                    }));
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="mb-5 flex w-[100%] items-center justify-center rounded-md bg-blue-600 text-white"
            onClick={() => {
              console.log(signUpInfo);
              handleSignUp();
            }}
          >
            <button className="w-full py-3">Đăng ký</button>
          </div>

          <div className="mb-5 flex w-[100%] items-center justify-center space-x-1 text-[#6F7882]">
            <span>Bạn đã có tài khoản?</span>
            <Link
              className="font-[450] text-blue-600 hover:underline"
              to="/dang-nhap"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen w-[40%]">
        <img src={LoginImg} className="h-[100%] w-[100%] object-cover"></img>
      </div>
    </div>
  );
};

export default SignUp;
