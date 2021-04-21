import { DefaultTheme } from "styled-components";

const sizing: DefaultTheme["sizing"] = {
  xs: `575px`, // for use with max-width
  sm: `576px`,
  md: `768px`,
  lg: `992px`,
  xl: `1200px`,
};

const lightTheme: DefaultTheme = {
  id: `light`,
  colors: {
    mainBg: `#ffffff`,
    mainAccent: `#f2f2f2`,
    mainHeadings: `#282828`,
    mainContent: `#282828`,
    mainPurple: `#6a57dc`,
    mainButton: `#6a57dc`,
    links: `#6a57dc`,
    borderMain: `#E6E6E6`,
    switch: `#756FFF`,
  },
  sizing,
};

const darkTheme: DefaultTheme = {
  ...lightTheme,
  id: `dark`,
  colors: {
    ...lightTheme.colors,
    mainBg: `#000000`,
    mainAccent: `#282828`,
    mainHeadings: `#C4C6FC`,
    mainContent: `#C4C6FC`,
    mainPurple: `#C4C6FC`,
    mainButton: `#A77FFA`,
    links: `#ffffff`,
    borderMain: `#ededf0`,
    switch: `#032B7F`,
  },
  sizing,
};

export { sizing, lightTheme, darkTheme };
