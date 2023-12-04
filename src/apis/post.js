import axios from "axios";
import axiosInstance from "./axiosConfig";

export const apiGetJobItem = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance({
        method: "get",
        url: "/api/v1/post/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPost = async (id) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: `/api/v1/post/${id}`,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const apiGetFilterPost = async (query) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/api/v1/post/filter",
      params: query,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const apiCreatePost = async (post) => {
  try {
    const request = await axiosInstance({
      method: "post",
      url: "/api/v1/post/",
      data: post,
    });
    return request;
  } catch (error) {
    return error;
  }
};

export const apiGetRelatedPost = async (postId, careerIds) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/api/v1/post/get-related-post",
      params: {
        postId,
        careerIds,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const apiApplyPost = async (query) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/api/v1/post/apply",
      params: query,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const apiSoftDeletePost = async (id) => {
  try {
    const response = await axiosInstance({
      method: "post",
      url: "/api/v1/post/soft-delete",
      data: { id },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const apiChangeStatusApplied = async (query) => {
  try {
    const request = await axiosInstance({
      method: "put",
      url: "/api/v1/post/apply",
      params: query,
    });
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetDeletedPost = async () => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: "/api/v1/post/delete-posts",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
