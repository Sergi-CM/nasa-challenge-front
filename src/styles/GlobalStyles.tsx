import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *, ::after, ::before {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  main {
    padding-top: 190px;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0 45px;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    font-family: ${(props) => props.theme.fontFamilies.primaryFontFamily};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4 {
    padding: 0;
    margin: 0;
  }

  ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

`;

export default GlobalStyles;
