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
      links: string;
      borderMain: string;
      switch: string;
    };
  }
}
