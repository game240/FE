import React from "react";
import { LargeContainer, MediumContainer, SmallContainer } from "./style";

interface ButtonPropsType {
  size: string;
  $isDisabled?: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Button = ({
  size,
  $isDisabled = false,
  children,
  ...props
}: ButtonPropsType) => {
  if (size === "small")
    return (
      <SmallContainer $isDisabled={$isDisabled} {...props}>
        {children}
      </SmallContainer>
    );
  else if (size === "medium")
    return (
      <MediumContainer $isDisabled={$isDisabled} {...props}>
        {children}
      </MediumContainer>
    );
  else if (size === "large")
    return (
      <LargeContainer $isDisabled={$isDisabled} {...props}>
        {children}
      </LargeContainer>
    );

  return null;
};

export default Button;
