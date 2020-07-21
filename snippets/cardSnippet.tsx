const cardSnippet = `
import React from "react";
import styled from "styled-components";

interface CardProps {
  title?: string | JSX.Element;
  featuredTitle?: string | JSX.Element;
  featuredImgName?: string;
}

const StyledCard = styled.div\`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 40px 0px;
  max-width: 320px;
  min-height: 200px;
  margin: 1rem;
\`;

const StyledFeatureTitleWrap = styled.div<{ excludeBorder: boolean }>\`
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding: 1rem;
  border-bottom: \${(props) =>
    props.excludeBorder ? \`none\` : \`1px solid gray\`};
\`;

const StyledFeaturedTitle = styled.h3\`
  font-weight: bold;
  margin: 0;
\`;

const StyledTitle = styled(StyledFeaturedTitle)\`
  margin: 1rem 0;
\`;

const StyledFeaturedImgWrap = styled.div<{ excludeRadius: boolean }>\`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-top-left-radius: \${(props) => (props.excludeRadius ? \`0\` : \`0.25rem\`)};
  border-top-right-radius: \${(props) =>
    props.excludeRadius ? \`0\` : \`0.25rem\`};
  img {
    align-self: center;
  }
\`;

const StyledContentWrap = styled.article\`
  padding: 1rem;
\`;

const Card: React.FC<CardProps> = ({
  children,
  title,
  featuredTitle,
  featuredImgName,
}) => {
  return (
    <StyledCard>
      {featuredTitle && (
        <StyledFeatureTitleWrap excludeBorder={Boolean(featuredImgName)}>
          <StyledFeaturedTitle>{featuredTitle}</StyledFeaturedTitle>
        </StyledFeatureTitleWrap>
      )}
      {featuredImgName && (
        <StyledFeaturedImgWrap excludeRadius={Boolean(featuredTitle)}>
          <img src={featuredImgName} />
        </StyledFeaturedImgWrap>
      )}
      {(title || children) && (
        <StyledContentWrap>
          {title && <StyledTitle>{title}</StyledTitle>}
          {children}
        </StyledContentWrap>
      )}
    </StyledCard>
  );
};

export { Card };
`;

export default cardSnippet;
