import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { ProgressRing } from "../../components/ProgressRing";
import { getAllComponentsIds } from "../../utils/utils";
// import { GetStaticProps } from "next";
// import { ComponentsListProps } from "../../interfaces/ComponentsList";
// import { DefaultTheme } from "styled-components";

// interface PageProps {
//   componentsList: ComponentsListProps["componentsList"];
//   setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
//   themeId: DefaultTheme["id"];
// }

// const StyledSandbox = styled.div``;

const SandboxPage = ({ ...props }) => {
  return (
    <Layout title="Sandbox | Reusable React Components" {...props}>
      {/* <StyledSandbox> */}
      <h1>Sandbox Testing Page</h1>
      <ProgressRing percentage={null} count={4} countMax={5} />
      {/* </StyledSandbox> */}
    </Layout>
  );
};

const getStaticProps = async () => {
  return getAllComponentsIds();
};

export default SandboxPage;
export { getStaticProps };
