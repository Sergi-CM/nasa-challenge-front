import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import AsteroidCardListStyled from "./AsteroidCardListStyled";

const AsteroidCardList = (): JSX.Element => {
  const asteroids = useAppSelector((state: RootState) => state.asteroid);

  return (
    <AsteroidCardListStyled className="asteroid-list">
      <h2 className="asteroid-list__title">List of asteroids</h2>
      <ul className="asteroid-list__container">
        {asteroids.map((asteroid) => (
          <li className="asteroid-list__item" key={asteroid.id}>
            <AsteroidCard id={asteroid.id} name={asteroid.name} />
          </li>
        ))}
      </ul>
    </AsteroidCardListStyled>
  );
};

export default AsteroidCardList;
