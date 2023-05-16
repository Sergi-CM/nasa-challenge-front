import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    accentColor: "#64ffda",
    primaryTextColor: "#dde5ff",
    backgroundColor: "#0a192f",
  },

  fontFamilies: {
    primaryFontFamily:
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', sans-serif",
  },

  fontSizes: {
    smallFontSize: "0.875rem",
    regularFontSize: "1rem",
    cardTitleFontSize: "1.5rem",
    mainHeadingFontSize: "clamp(40px, 8vw, 60px)",
  },

  breakpoints: {
    mobileMinWidth: "320px",
    desktop: "900px",
  },
};

export default theme;
