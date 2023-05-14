import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { asteroidReducer } from "./features/asteroid/asteroidSlice";
import { datesReducer } from "./features/dates/datesSlice";

export const store = configureStore({
  reducer: {
    asteroid: asteroidReducer,
    dates: datesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
