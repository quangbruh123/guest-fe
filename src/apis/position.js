import axiosInstance from "./axiosConfig";

export const apiGetPositions = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/position",
    });
    return response;
  } catch (error) {
    return error;
  }
};
