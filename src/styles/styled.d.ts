import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      background: string;
      backgroundGradient: string;
      backgroundLight: string;
      text: string;
      formColor: string;
      borderFormColor: string;
      buttonBackground: string;
      buttonHoverBackground: string;
    };
  }
}
