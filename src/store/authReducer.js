import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    type: null,
    accessToken: null,
    userInfo: null,
    career: [],
    interestedPostId: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.type = "register";
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.type = "login";
      state.userInfo = action.payload;
    },
    logOut: (state, action) => {
      state.type = null;
      state.accessToken = null;
      state.username = null;
    },
    setCareers: (state, action) => {
      state.career = action.payload;
      console.log(action.payload);
    },
    setInterestedPostId: (state, action) => {
      state.interestedPostId = action.payload;
      console.log(action.payload);
    },
  },
});

export const {
  setAccessToken,
  setUser,
  logOut,
  setCareers,
  setInterestedPostId,
} = authSlice.actions;

export default authSlice.reducer;

export const getUsername = (state) => state.auth.userInfo?.candidateName;
export const getUserInfo = (state) => state.auth.userInfo;
export const getUserCareers = (state) => state.auth.career;
export const getInterestedPostId = (state) => state.auth.interestedPostId;
export const getAccessToken = (state) => state.auth.accessToken;
