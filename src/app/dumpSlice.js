import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

export const dumpSlice = createSlice({
  name: 'dump',
  initialState,
  reducers: {
    getNumber: (state) => {
      return state.number;
    },
  },
});

export const { getNumber } = dumpSlice.actions;

export default dumpSlice.reducer;
