import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "./calculate-slice";

const store = configureStore({
  reducer: {
    calculate: calculateSlice.reducer,
  },
});

export default store;
