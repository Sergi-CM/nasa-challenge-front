import styled from "styled-components";

const AsteroidCardStyled = styled.article`
  height: 120px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: ${(props) => props.theme.colors.primaryTextColor};
  border: 1px solid ${(props) => props.theme.colors.accentColor};

  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 0 12px ${(props) => props.theme.colors.accentColor} inset;
  }

  .card {
    &__name {
      font-size: ${(props) => props.theme.fontSizes.cardTitleFontSize};
    }
  }
`;

export default AsteroidCardStyled;
