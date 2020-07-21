import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { lightTheme, darkTheme } from "../utils/theme";
import { DefaultTheme } from "styled-components";

interface ThemeTogglerProps {
  backgroundDefault: string;
  backgroundToggled: string;
  adaText: string;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  themeId: DefaultTheme["id"];
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ ...props }) => {
  const { setTheme } = props;
  return (
    <ToggleSwitch
      {...props}
      callback={(darkThemeEnabled: boolean) => {
        setTheme(darkThemeEnabled ? darkTheme : lightTheme);
      }}
      defaultToggleState={props.themeId === `dark` ? `on` : `off`}
    />
  );
};

export { ThemeToggler };
