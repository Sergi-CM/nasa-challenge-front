import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { asteroidReducer } from "./features/asteroid/asteroidSlice";

export const store = configureStore({
  reducer: {
    asteroid: asteroidReducer,
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
