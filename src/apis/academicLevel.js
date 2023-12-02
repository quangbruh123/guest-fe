import axiosInstance from "./axiosConfig";

export const apiGetAcademicLevels = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/academic-level/",
    });
    return response;
  } catch (error) {
    return error;
  }
};
