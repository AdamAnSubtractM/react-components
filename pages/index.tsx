import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { getAllComponentsIds } from "../utils/utils";
import { GetStaticProps } from "next";
import { ComponentsListProps } from "../interfaces/ComponentsList";
import { DefaultTheme } from "styled-components";

interface HomePageProps {
  componentsList: ComponentsListProps["componentsList"];
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  themeId: DefaultTheme["id"];
}

const HomePage: React.FC<HomePageProps> = ({
  componentsList,
  setTheme,
  themeId,
}) => (
  <Layout
    title="React Components | Reusable components for your next project."
    componentsList={componentsList}
    setTheme={setTheme}
    themeId={themeId}
    home={true}
  >
    <h1>Reusable components for your next project.</h1>
    <Button href={`/components`} ctaType={`primary`}>
      Get Started &#8594;
    </Button>
  </Layout>
);

const getStaticProps: GetStaticProps = async () => {
  return getAllComponentsIds();
};

export default HomePage;
export { getStaticProps };
