import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface ButtonProps {
  type?: "submit" | "reset";
  href?: string;
  externalHref?: string;
  callback?: (x?: any) => any;
  ctaType: "primary" | "secondary";
}

const StyledButton = styled.button<{
  ctaType: "primary" | "secondary";
  hasAnchor: boolean;
}>`
  padding: ${(props) => (props.hasAnchor ? `0` : `1.25rem 2rem`)};
  text-transform: lowercase;
  text-align: center;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.colors.mainButton};
  background: ${(props) =>
    props.ctaType === "primary" ? props.theme.colors.mainButton : `white`};
  color: ${(props) =>
    props.ctaType === "primary" ? `white` : props.theme.colors.mainButton};
  a {
    display: block;
    color: ${(props) =>
      props.ctaType === "primary" ? `white` : props.theme.colors.mainButton};
    text-transform: inherit;
    text-decoration: none;
    padding: 1.25rem 2rem;
  }
  a:visited {
    color: ${(props) =>
      props.ctaType === "primary" ? `white` : props.theme.colors.mainButton};
    text-decoration: none;
  }
`;

const Button: React.FC<ButtonProps> = ({
  type,
  href,
  externalHref,
  callback,
  ctaType,
  children,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={callback}
      ctaType={ctaType}
      hasAnchor={Boolean(href)}
    >
      {href && (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
      {externalHref && <a href={externalHref}>{children}</a>}
    </StyledButton>
  );
};

export { Button };
