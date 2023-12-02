import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  positionAPI,
  careerAPI,
  districtAPI,
  workingTypeAPI,
  academicLevelAPI,
} from "../apis";

export const fetchData = createAsyncThunk(
  "staticData/fetchAll",
  async (data, { rejectWithValue }) => {
    try {
      const pRes = await positionAPI.apiGetPositions();
      const aRes = await academicLevelAPI.apiGetAcademicLevels();
      const dRes = await districtAPI.apiGetDistricts();
      const wtRes = await workingTypeAPI.apiGetWorkingTypes();
      const cRes = await careerAPI.apiGetCareers();

      const returnResponse = {
        careers: cRes.data,
        districts: dRes,
        academicLevels: aRes.data,
        positions: pRes.data,
        workingTypes: wtRes.data,
      };
      return returnResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const slice = createSlice({
  name: "staticData",
  initialState: {
    data: null,
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = { ...action.payload };
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

// làm cái selector cho nó gọn cái code
export const getStaticData = (state) => state.staticData.data;
export const getError = (state) => state.staticData.error;
export const getStatus = (state) => state.staticData.status;

export default slice.reducer;
