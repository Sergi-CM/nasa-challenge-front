import styled from "styled-components";

const SearchBarStyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;

  label {
    color: ${(props) => props.theme.colors.primaryTextColor};
  }

  .searchbar {
    &__initial-date,
    &__range,
    &__submit-button {
      width: 150px;
      padding: 5px 15px;
      border: 1px solid ${(props) => props.theme.colors.accentColor};

      text-align: center;
      background-color: transparent;
      color: ${(props) => props.theme.colors.primaryTextColor};
    }

    &__range {
      width: 80px;

      &::-webkit-calendar-picker-indicator {
        color: red;
      }
    }

    &__submit-button:hover {
      box-shadow: 0 0 12px ${(props) => props.theme.colors.accentColor} inset;
    }
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default SearchBarStyled;
