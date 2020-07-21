import React from "react";
import styled from "styled-components";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab";

interface ViewSwitcherProps {
  activeView?: "Live Example" | "Code Snippets";
  LiveExample?: any; //todo: fix these types
  CodeSnippets?: any;
}

const StyledViewSwitcher = styled.section`
  width: 100%;
`;

const StyledViewContent = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const StyledList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: space-between;
`;

const StyledListItem = styled.li<{ isSelected: boolean }>`
  padding: 1rem;
  margin: 0;
  cursor: pointer;
  text-decoration: ${(props) => (props.isSelected ? `underline` : `none`)};
  background-color: lightgray;
  a {
    color: blue;
    font-weight: bold;
  }
`;

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  activeView = "Live Example",
  LiveExample = () => "Coming Soon.",
  CodeSnippets = () => "Coming Soon.",
}) => {
  const [activeViewState, setActiveViewState] = React.useState("Live Example");

  const setActiveView = function (view: ViewSwitcherProps["activeView"]) {
    console.log("Setting active view.");
    if (view === activeViewState || view === undefined) return;
    setActiveViewState(view);
  };

  React.useEffect(() => {
    setActiveView(activeView);
  }, []);

  return (
    <StyledViewSwitcher>
      <StyledList>
        <StyledListItem
          onClick={() => setActiveView("Live Example")}
          isSelected={Boolean(activeViewState === "Live Example")}
        >
          <a>Live Example</a>
        </StyledListItem>
        <StyledListItem
          onClick={() => setActiveView("Code Snippets")}
          isSelected={Boolean(activeViewState === "Code Snippets")}
        >
          <a>Code Snippets</a>
        </StyledListItem>
      </StyledList>
      <Tabs>
        <Tab active={true} callback={() => console.log(`1`)}>
          Live Example
        </Tab>
        <Tab active={false} callback={() => console.log(`2`)}>
          Code Snippets
        </Tab>
      </Tabs>
      <StyledViewContent>
        {activeViewState === "Live Example" && <LiveExample />}
        {activeViewState === "Code Snippets" && <CodeSnippets />}
      </StyledViewContent>
    </StyledViewSwitcher>
  );
};

export { ViewSwitcher };
