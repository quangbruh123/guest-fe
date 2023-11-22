import { configureStore } from "@reduxjs/toolkit";
import staticData from "./staticData";

export const store = configureStore({
  reducer: {
    staticData: staticData,
  },
});
