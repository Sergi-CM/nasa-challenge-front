import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.colors.accentColor};
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export default HeaderStyled;
