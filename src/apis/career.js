import axiosInstance from "./axiosConfig";

export const apiGetCareers = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/career",
    });
    return response;
  } catch (error) {
    return error;
  }
};
// dùng careerId để tìm post
export const apiGetPostsFromCareer = async (id) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: `/api/v1/career/get-career/${id}`,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const apiGetPostNumber = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/career/count-career",
    });
    return response;
  } catch (error) {
    return error;
  }
};
