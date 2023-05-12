import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AsteroidListStructure } from "../../../types/asteroidTypes";

const asteroidsInitialState: AsteroidListStructure = [];

export const asteroidSlice = createSlice({
  name: "asteroids",
  initialState: asteroidsInitialState,
  reducers: {
    loadAsteroids: (
      currentAsteroidsState: AsteroidListStructure,
      action: PayloadAction<AsteroidListStructure>
    ): AsteroidListStructure => [...action.payload],
  },
});

export const asteroidReducer = asteroidSlice.reducer;

export const { loadAsteroids: loadAsteroidsActionCreator } =
  asteroidSlice.actions;
