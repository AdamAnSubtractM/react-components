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

const StyledButton = styled.button<{ ctaType: "primary" | "secondary" }>`
  text-align: center;
  text-transform: uppercase;
  padding: 1.25rem 2rem;
  border-radius: 30px;
  border: 1px solid gray;
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
    <StyledButton type={type} onClick={callback} ctaType={ctaType}>
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
