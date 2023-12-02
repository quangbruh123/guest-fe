import axiosInstance from "./axiosConfig";

export const apiGetWorkingTypes = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/working-type",
    });
    return response;
  } catch (error) {
    return error;
  }
};
