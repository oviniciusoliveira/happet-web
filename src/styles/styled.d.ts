import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      secundaryLight: string;
      white: string;
      tertiary: string;
      tertiaryLight: string;
      background: string;
      backgroundGradient: string;
      backgroundLight: string;
      text: string;
      inputColor: string;
      formColor: string;
      borderFormColor: string;
      buttonBackground: string;
      buttonBackgroundLight: string,
      buttonHoverBackground: string;
      pink: string,
      pinkMedium: string,
      pinkLight: string,
      pinkDark: string,
      green: string,
      greenDark: string,
      greenMedium: string,
    };
  }
}
