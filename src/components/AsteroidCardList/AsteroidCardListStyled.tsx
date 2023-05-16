import styled from "styled-components";

const AsteroidCardListStyled = styled.section`
  width: 100%;
  margin: 70px 0;

  .asteroid-list {
    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    &__title {
      margin-bottom: 50px;
      text-align: center;
      color: ${(props) => props.theme.colors.primaryTextColor};
    }
  }
`;

export default AsteroidCardListStyled;
