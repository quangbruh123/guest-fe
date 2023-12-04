import { configureStore } from "@reduxjs/toolkit";
import staticData from "./staticData";
import authReducer from "./authReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const commonConfig = {
  ...persistConfig,
  whiteList: ["accessToken"],
};

export const store = configureStore({
  reducer: {
    staticData: staticData,
    auth: persistReducer(commonConfig, authReducer),
  },
});

export const persist = persistStore(store);
