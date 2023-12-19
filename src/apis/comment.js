import axiosInstance from "./axiosConfig";

export const apiCreateComment = async (payload) => {
  try {
    const response = await axiosInstance({
      method: "post",
      url: "/comment/",
      data: payload,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const apiGetPostComment = async (id) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: `/comment/get-post-comment/${id}`,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};
