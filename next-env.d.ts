/// <reference types="next" />
/// <reference types="next/types/global" />
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    id: `light` | `dark`;
    colors: {
      mainBg: string;
      mainAccent: string;
      mainHeadings: string;
      mainContent: string;
      mainPurple: string;
      mainButton: string;
      links: string;
      borderMain: string;
      switch: string;
    };
    sizing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
