import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppAsteroidListStructure } from "../../../types/asteroidTypes";

const asteroidsInitialState: AppAsteroidListStructure = [];

export const asteroidSlice = createSlice({
  name: "asteroids",
  initialState: asteroidsInitialState,
  reducers: {
    loadAsteroids: (
      currentAsteroidsState: AppAsteroidListStructure,
      action: PayloadAction<AppAsteroidListStructure>
    ): AppAsteroidListStructure => [...action.payload],
  },
});

export const asteroidReducer = asteroidSlice.reducer;

export const { loadAsteroids: loadAsteroidsActionCreator } =
  asteroidSlice.actions;
