import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { AppHead } from "./AppHead";
import { MainNav } from "./MainNav";
import { Logo } from "./Logo";
import { ThemeToggler } from "./ThemeToggler";
import { lightTheme, darkTheme } from "../utils/theme";
import { ComponentsListProps } from "../interfaces/ComponentsList";
import { DefaultTheme } from "styled-components";

interface LayoutProps {
  title: string;
  componentsList: ComponentsListProps["componentsList"];
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  themeId: DefaultTheme["id"];
  home?: boolean;
}

const StyledRow = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.colors.mainBg};
  padding: 1rem 2%;
  min-height: 4vh;
  max-height: 50px;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const StyledPageWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 92vh;
  @media all and (min-width: ${(props) => props.theme.sizing.md}) {
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: space-between;
  }
`;

const StyledAside = styled.aside`
  display: flex;
  align-items: center;
  padding: 1rem;
  @media all and (min-width: ${(props) => props.theme.sizing.md}) {
    border-right: 1px solid gray;
    width: 25%;
  }
`;

const StyledMainContent = styled.main`
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: auto;
  max-width: 1000px;
  @media all and (min-width: ${(props) => props.theme.sizing.md}) {
    width: 75%;
  }
`;

const StyledThemeSwitcher = styled.div`
  max-width: 7rem;
`;

const StyledBrandingWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  a {
    display: flex;
    flex-flow: row nowrap;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledLogo = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 1rem;
  svg {
    width: 30px;
    @media all and (min-width: ${(props) => props.theme.sizing.sm}) {
      width: 45px;
    }
  }
`;

const StyledLogoText = styled.h2`
  font-size: 2rem;
  display: none;
  color: ${(props) => props.theme.colors.mainHeadings};
  margin: 0;
  padding: 0.5rem 0;
  @media all and (min-width: ${(props) => props.theme.sizing.md}) {
    display: inline-flex;
    align-self: center;
  }
  @media all and (min-width: ${(props) => props.theme.sizing.lg}) {
    font-size: 3rem;
  }
`;

const logo = {
  desc: `reactcomponents.io logo.`,
  src: `/logo.svg`,
  text: `reactcomponents.io`,
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "reactcomponents.io | Reusable components for your next project.",
  componentsList,
  setTheme,
  themeId,
  home,
}) => (
  <>
    <AppHead title={title} />
    <StyledRow>
      <StyledBrandingWrap>
        {!home ? (
          <Link href={`/`}>
            <a>
              <StyledLogo>
                <Logo themeId={themeId} />
              </StyledLogo>
              <StyledLogoText>{logo.text}</StyledLogoText>
            </a>
          </Link>
        ) : (
          <>
            <StyledLogo>
              <Logo themeId={themeId} />
            </StyledLogo>
            <StyledLogoText>{logo.text}</StyledLogoText>
          </>
        )}
      </StyledBrandingWrap>
      <div>
        <StyledThemeSwitcher>
          <ThemeToggler
            adaText={`Theme toggle for light and dark mode.`}
            backgroundDefault={`url("/dark-mode-icon.svg"), ${darkTheme.colors.switch}`}
            backgroundToggled={`url("/light-mode-icon.svg"), ${lightTheme.colors.switch}`}
            setTheme={setTheme}
            themeId={themeId}
          />
        </StyledThemeSwitcher>
      </div>
    </StyledRow>
    <StyledPageWrapper>
      {!home && (
        <StyledAside>
          <MainNav componentsList={componentsList} />
        </StyledAside>
      )}
      <StyledMainContent>
        <div>{children}</div>
      </StyledMainContent>
    </StyledPageWrapper>
    <StyledRow as={`footer`}>
      <span>Footer - More to come on what this looks like.</span>
    </StyledRow>
  </>
);

export { Layout };
