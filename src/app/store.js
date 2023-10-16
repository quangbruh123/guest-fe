import { configureStore } from '@reduxjs/toolkit';
import dumpReducer from './dumpSlice';

// làm thêm
export const store = configureStore({
  reducer: {
    dump: dumpReducer,
  },
});
