import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DatesStructure } from "../../../types/datesTypes";

const datesInitialState: DatesStructure = {
  initialDate: "",
  toDate: "",
};

export const datesSlice = createSlice({
  name: "dates",
  initialState: datesInitialState,
  reducers: {
    setInitialDate: (
      currentState: DatesStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      initialDate: action.payload,
    }),

    setToDate: (
      currentState: DatesStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      toDate: action.payload,
    }),
  },
});

export const datesReducer = datesSlice.reducer;

export const {
  setInitialDate: setInitialDateActionCreator,
  setToDate: setToDateActionCreator,
} = datesSlice.actions;
