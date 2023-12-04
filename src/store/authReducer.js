import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    type: null,
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.type = "register";
      state.accessToken = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
