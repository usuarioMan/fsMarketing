import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./dummySlice";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    form: formSlice,
  },
});
