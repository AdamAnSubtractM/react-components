import Link from "next/link";
import { Layout } from "../../components/Layout";
import { getAllComponentsIds } from "../../utils/utils";
import { GetStaticProps } from "next";
import { ComponentsListProps } from "../../interfaces/ComponentsList";
import { DefaultTheme } from "styled-components";

interface PageProps {
  componentsList: ComponentsListProps["componentsList"];
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  themeId: DefaultTheme["id"];
}

const Overview: React.FC<PageProps> = ({ ...props }) => (
  <Layout title="Overview | Reusable React Components" {...props}>
    <h1>Components Overview</h1>
    <p>Site information/introduction goes here. Coming soon.</p>
    <p>
      <Link href="/">
        <a>&#8592; Go Home</a>
      </Link>
    </p>
  </Layout>
);

const getStaticProps: GetStaticProps = async () => {
  return getAllComponentsIds();
};

export default Overview;
export { getStaticProps };
