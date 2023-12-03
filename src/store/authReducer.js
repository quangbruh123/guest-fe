import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
