import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      accentColor: string;
      primaryTextColor: string;
      backgroundColor: string;
    };

    fontFamilies: {
      primaryFontFamily: string;
    };

    fontSizes: {
      smallFontSize: string;
      regularFontSize: string;
      mainHeadingFontSize: string;
    };

    breakpoints: {
      mobileMinWidth: string;
      desktop: string;
    };
  }
}
