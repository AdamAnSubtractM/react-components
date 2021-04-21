import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { getAllComponentsIds } from "../utils/utils";
import { GetStaticProps } from "next";
import { ComponentsListProps } from "../interfaces/ComponentsList";
import styled, { DefaultTheme } from "styled-components";

interface HomePageProps {
  componentsList: ComponentsListProps["componentsList"];
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  themeId: DefaultTheme["id"];
}

const StyledLandingText = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
  @media all and (min-width: ${(props) => props.theme.sizing.sm}) {
    font-size: 5rem;
  }
  @media all and (min-width: ${(props) => props.theme.sizing.md}) {
    font-size: 3rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  @media all and (min-width: ${(props) => props.theme.sizing.md}) {
    flex-flow: row wrap;
    justify-content: space-between;
    > div {
      width: 48%;
    }
  }
`;

const HomePage: React.FC<HomePageProps> = ({
  componentsList,
  setTheme,
  themeId,
}) => (
  <Layout
    title="reactcomponents.io | Reusable react components for your next project."
    componentsList={componentsList}
    setTheme={setTheme}
    themeId={themeId}
    home={true}
  >
    <StyledContainer>
      <div>
        <StyledLandingText>
          Reusable React components for your next project.
        </StyledLandingText>
        <Button href={`/components`} ctaType={`primary`}>
          Get Started &#8594;
        </Button>
      </div>
      <div>artwork here</div>
    </StyledContainer>
  </Layout>
);

const getStaticProps: GetStaticProps = async () => {
  return getAllComponentsIds();
};

export default HomePage;
export { getStaticProps };
