import React from "react";
import styled from "styled-components";

interface ToggleSwitchProps {
  backgroundDefault: string;
  backgroundToggled: string;
  adaText: string;
  callback: (x: any) => any;
  defaultToggleState?: ToggleSwitch["state"];
}

interface ToggleSwitch {
  state: "on" | "off";
}

const StyledSwitchWrapper = styled.div<{
  backgroundDefault: string;
  backgroundToggled: string;
}>`
  min-width: 7rem;
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 100%;
    height: 3rem;
    background: ${(props) => props.backgroundDefault};
    background-size: contain;
    background-position: center right;
    background-repeat: no-repeat;
    display: block;
    border-radius: 3rem;
    border: 2px solid ${(props) => props.theme.colors.borderMain};
    position: relative;
    transition: background 0.3s ease-in-out, broder 0.3s ease-in-out;
  }

  label:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 5px;
    width: 1.75rem;
    height: 1.75rem;
    background: #fff;
    border-radius: 1.75rem;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${(props) => props.backgroundToggled};
    background-size: contain;
    background-position: center left;
    background-repeat: no-repeat;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 1.75rem;
  }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  backgroundDefault,
  backgroundToggled,
  adaText,
  callback,
  defaultToggleState = `off`,
}) => {
  const ToggleCheckbox = React.useRef<any>(null);

  return (
    <StyledSwitchWrapper
      backgroundDefault={backgroundDefault}
      backgroundToggled={backgroundToggled}
    >
      <input
        ref={ToggleCheckbox}
        type="checkbox"
        id="switch"
        onChange={() => callback(ToggleCheckbox?.current?.checked)}
        checked={defaultToggleState === `off` ? false : true}
      />
      <label htmlFor="switch">{adaText}</label>
    </StyledSwitchWrapper>
  );
};

export { ToggleSwitch };
