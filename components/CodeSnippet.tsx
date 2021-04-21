import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

interface CodeSnippetProps {
  code: string;
  lang?: "tsx" | "ts" | "jsx" | "js";
}

const StyledPre = styled.pre`
  text-align: left;
  padding: 2rem 2.5rem;
  overflow: auto;
  max-height: inherit;
  border-radius: 45px;
`;

const StyledOverflowWrapper = styled.div`
  display: inline-grid;
  width: 100%;
  max-height: 50vh;
  overflow: auto;
`;

const StyledLine = styled.div`
  display: table-row;
`;

const StyledLineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const StyledLineContent = styled.span`
  display: table-cell;
`;

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, lang = "tsx" }) => (
  <Highlight {...defaultProps} theme={theme} code={code.trim()} language={lang}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <StyledOverflowWrapper>
        <StyledPre className={className} style={style}>
          {tokens.map((line, i) => (
            <StyledLine key={i} {...getLineProps({ line, key: i })}>
              <StyledLineNo>{i + 1}</StyledLineNo>
              <StyledLineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </StyledLineContent>
            </StyledLine>
          ))}
        </StyledPre>
      </StyledOverflowWrapper>
    )}
  </Highlight>
);

export { CodeSnippet };
