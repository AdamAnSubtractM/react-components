import React from "react";
import styled from "styled-components";
import code from "../../snippets/cardSnippet";
import { Layout } from "../../components/Layout";
import { ViewSwitcher } from "../../components/ViewSwitcher";
import { CodeSnippet } from "../../components/CodeSnippet";
import { Card } from "../../components/Card";
import { getAllComponentsIds } from "../../utils/utils";
import { GetStaticProps } from "next";
import { ComponentsListProps } from "../../interfaces/ComponentsList";
import { DefaultTheme } from "styled-components";

interface PageProps {
  componentsList: ComponentsListProps["componentsList"];
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  themeId: DefaultTheme["id"];
}

const StyledLiveExamplesWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const CardPage: React.FC<PageProps> = ({ ...props }) => {
  const LiveExample = () => (
    <StyledLiveExamplesWrap>
      <Card title={`Standard Card Component`} featuredImgName={`test.jpg`}>
        <p>
          This is what a card component would look like with the <em>title</em>,{" "}
          <em>featuredImgName</em>, and <em>children</em> props provided.
        </p>
        <p>
          Photo Credit:{" "}
          <a
            href="https://unsplash.com/@danieljschwarz"
            title="View Daniel's profile on Unsplash."
            target="_blank"
          >
            Daniel J. Schwarz
          </a>
        </p>
      </Card>

      <Card
        title={`Card Component w/o Featured Image`}
        featuredTitle={`Fancy Heading`}
      >
        <p>
          This is what a card component would look like with the <em>title</em>,{" "}
          <em>featuredTitle</em>, and <em>children</em> props provided.
        </p>
      </Card>

      <Card
        title={`Card Component w/ Featured Title`}
        featuredImgName={`test2.jpg`}
        featuredTitle={`Fancy Heading`}
      >
        <p>
          This is what a card component would look like with the <em>title</em>,{" "}
          <em>featuredImgName</em>, <em>featuredTitle</em>, and{" "}
          <em>children</em> props provided.
        </p>
        <p>
          Photo Credit:{" "}
          <a
            href="https://unsplash.com/@betagamma"
            title="View Daniil's profile on Unsplash."
            target="_blank"
          >
            Daniil Silantev
          </a>
        </p>
      </Card>
    </StyledLiveExamplesWrap>
  );

  const CodeSnippets = () => <CodeSnippet code={code} />;

  return (
    <Layout title="Card | Reusable React Components" {...props}>
      <h1>Testing Page Layout - Card Component</h1>
      <ViewSwitcher LiveExample={LiveExample} CodeSnippets={CodeSnippets} />
    </Layout>
  );
};

const getStaticProps: GetStaticProps = async () => {
  return getAllComponentsIds();
};

export default CardPage;
export { getStaticProps };
