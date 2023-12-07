import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    type: null,
    accessToken: null,
    username: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.type = "register";
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.type = "login";
      state.username = action.payload;
    },
    logOut: (state, action) => {
      state.type = null;
      state.accessToken = null;
      state.username = null;
    },
  },
});

export const { setAccessToken, setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const getUsername = (state) => state.auth.username;
