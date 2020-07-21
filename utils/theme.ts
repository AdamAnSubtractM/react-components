import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  id: `light`,
  colors: {
    mainBg: `#ffffff`,
    mainAccent: `#f2f2f2`,
    mainHeadings: `#333333`,
    mainContent: `#333333`,
    mainPurple: `#5B55FF`,
    links: `#5B55FF`,
    borderMain: `#f2f2f2`,
    switch: `#756FFF`,
  },
};

const darkTheme: DefaultTheme = {
  ...lightTheme,
  id: `dark`,
  colors: {
    ...lightTheme.colors,
    mainBg: `#000000`,
    mainAccent: `#282828`,
    mainHeadings: `#DAD4FF`,
    mainContent: `#f2f2f2`,
    mainPurple: `#DAD4FF`,
    links: `#DAD4FF`,
    borderMain: `#DAD4FF`,
    switch: `#032B7F`,
  },
};

export { lightTheme, darkTheme };
