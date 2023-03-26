import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
  name: "calculate",
  initialState: {
    principleAmount: 100000,
    rateOfInterest: 6,
    timePeriod: 5,
    totalInterest:  33823,
    totalAmount: 133823,
    n: 1,
    pPer:75,
    iPer:25 
  },
  reducers: {
    setValues(state, action) {
      const newItem = action.payload;

      state.principleAmount = newItem.principleAmount;
      state.rateOfInterest = newItem.rateOfInterest;
      state.timePeriod = newItem.timePeriod;
      state.n = newItem.n;

      state.totalAmount = Math.round(state.principleAmount * Math.pow(1 + (state.rateOfInterest / (state.n*100)), state.n * state.timePeriod));

      state.totalInterest = state.totalAmount - newItem.principleAmount;

      state.pPer=Math.round((state.principleAmount / (state.totalInterest + state.principleAmount)) * 100);

      state.iPer=Math.round((state.totalInterest / (state.totalInterest + state.principleAmount)) * 100);

    

      // console.log(state.principleAmount);
      // console.log(state.rateOfInterest);
      // console.log(state.timePeriod);
      // console.log(state.totalInterest);
      // console.log(state.totalAmount);
      // console.log(state.n);
    },
  },
});

export const calculateActions = calculateSlice.actions;

export default calculateSlice;
