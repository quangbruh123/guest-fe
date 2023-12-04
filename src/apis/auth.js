import axios from "axios";
import axiosInstance from "./axiosConfig";

export const apiLogin = async (payload) => {
  try {
    const response = await axiosInstance({
      method: "post",
      url: "/auth/login",
      data: payload,
    });
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
  } catch (error) {
    console.log(error);
  }
};
