import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  ApiResponseStructure,
  AppAsteroidListStructure,
} from "../types/asteroidTypes";
import { loadAsteroidsActionCreator } from "../store/features/asteroid/asteroidSlice";

const apiUrl = process.env.REACT_APP_API_URL!;
const apiKey = process.env.REACT_APP_API_KEY!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const initialDate = useAppSelector((state) => state.dates.initialDate);
  const toDate = useAppSelector((state) => state.dates.initialDate);

  const getAsteroids = useCallback(async () => {
    try {
      const response = await fetch(
        `${apiUrl}feed?start_date=${initialDate}&end_date=${toDate}&api_key=${apiKey}`,
        {
          method: "GET",
        }
      );

      const { near_earth_objects: asteroidsByDateList }: ApiResponseStructure =
        await response.json();

      const asteroidsArrayFormat = Object.entries(asteroidsByDateList);
      const formattedAsteroidsList = asteroidsArrayFormat.map((date) =>
        date[1].map((asteroid) => ({
          id: asteroid.id,
          hazardous: asteroid.is_potentially_hazardous_asteroid,
          name: asteroid.name,
          speed:
            asteroid.close_approach_data[0].relative_velocity
              .kilometers_per_second,
          maxDiameter:
            asteroid.estimated_diameter.kilometers.estimated_diameter_max,
        }))
      );

      const flattenedAsteroidList: AppAsteroidListStructure =
        formattedAsteroidsList.flatMap((level2) => level2);

      dispatch(loadAsteroidsActionCreator(flattenedAsteroidList));
    } catch (error) {}
  }, [dispatch, initialDate, toDate]);

  return { getAsteroids };
};

export default useApi;
