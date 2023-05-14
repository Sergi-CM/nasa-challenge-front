import { mockedAsteroids } from "../../../mocks/asteroids";
import { AppAsteroidListStructure } from "../../../types/asteroidTypes";
import { asteroidReducer, loadAsteroidsActionCreator } from "./asteroidSlice";

describe("Given a loadAsteroids reducer", () => {
  describe("When called with a list of two asteroids", () => {
    test("Then it should return a list with these two asteroids", () => {
      const asteroidsInitialState: AppAsteroidListStructure = [];

      const newAsteroidsList = asteroidReducer(
        asteroidsInitialState,
        loadAsteroidsActionCreator(mockedAsteroids)
      );

      expect(newAsteroidsList).toStrictEqual(mockedAsteroids);
    });
  });
});
