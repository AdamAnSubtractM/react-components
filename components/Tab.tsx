import React from "react";
import styled from "styled-components";

interface Tab {
  active: boolean;
  callback: (x?: any) => any;
}

const StyledTab = styled.li<{ active: boolean }>`
  cursor: pointer;
  margin: 0;
  padding: 1rem;
`;

const Tab: React.FC<Tab> = ({ active, callback, children }) => {
  return (
    <StyledTab onClick={callback} active={active}>
      {children}
    </StyledTab>
  );
};

export { Tab };
