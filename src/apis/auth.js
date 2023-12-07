import axios from "axios";
import axiosInstance from "./axiosConfig";

export const apiLogin = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      {
        username: payload.username,
        password: payload.password,
      },
      {
        withCredentials: true,
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const apiSignUp = async (payload) => {
  try {
    const response = await axiosInstance({
      method: "post",
      url: "/auth/create-candidate",
      data: payload,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/auth/current-user",
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};
