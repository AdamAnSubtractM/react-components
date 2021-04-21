import "normalize.css";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme } from "../utils/theme";
import { AppProps } from "next/app";
import { DefaultTheme } from "styled-components";

const GlobalAppStyles = createGlobalStyle`
  :root {
    --main-purple: #6a57dc;
    --secondary-purple: #A77FFA;
    --light-purple: #C4C6FC;
    --main-black: #000000;
    --secondary-black: #282828;
    --main-white: #ffffff;
    --secondary-white: #f2f2f2;
    --main-gray: #CCCCCC;
    --secondary-gray: #ededf0;
    --light-gray: #E6E6E6;
    --main-green: #3BFFB7;
    --main-red: #ff3b3b;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  html {
    line-height: 1.3;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    font-size: 62.5%;
    background: var(--main-white);
  }
  body {
    font-size: 1.6rem;
    font-family: 'Roboto', serif;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mainContent};
    background-color: ${(props) => props.theme.colors.mainBg}
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.colors.mainHeadings};
    text-transform: lowercase;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.6rem;
  }
  h4 {
    font-size: 2.2rem;
  }
  h5 {
    font-size: 2rem;
  }
  h6 {
    font-size: 1.8rem;
  }
  a {
    color: ${(props) => props.theme.colors.links};
    text-decoration: underline;
    text-transform: lowercase;
    cursor: pointer;
    &:visited {
      color: ${(props) => props.theme.colors.links};
      text-decoration: underline;
    }
    &:hover {
      color: var(--secondary-purple);
      text-decoration: none;
    }
  }
`;

const App = function ({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<DefaultTheme | null>(null);

  React.useEffect(() => {
    console.log("Set cookie for theme here", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme ? theme : lightTheme}>
      <GlobalAppStyles />
      <Component
        {...pageProps}
        setTheme={setTheme}
        themeId={theme ? theme.id : lightTheme.id}
      />
    </ThemeProvider>
  );
};

export default App;
