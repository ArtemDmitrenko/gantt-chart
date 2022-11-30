import { combineReducers, configureStore } from "@reduxjs/toolkit";
import levelSlice from "./levelSlice";

const rootReducer = combineReducers({
  level: levelSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
