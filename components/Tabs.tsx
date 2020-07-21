import React from "react";
import styled from "styled-components";

const StyledTabs = styled.ol`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderMain};
  padding: 0 2rem;
  list-style-type: none;
`;

const Tabs: React.FC = ({ children }) => {
  return <StyledTabs>{children}</StyledTabs>;
};

export { Tabs };
