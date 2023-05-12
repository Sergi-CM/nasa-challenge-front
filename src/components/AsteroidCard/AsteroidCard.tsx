import AsteroidCardStyled from "./AsteroidCardStyled";

interface AsteroidCardProps {
  id: string;
  name: string;
}

const AsteroidCard = ({ id, name }: AsteroidCardProps): JSX.Element => {
  return (
    <AsteroidCardStyled className="card">
      <h2 className="card__name">{name}</h2>
      <span className="card__id">{id}</span>
    </AsteroidCardStyled>
  );
};

export default AsteroidCard;
