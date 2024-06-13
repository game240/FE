import React from "react";
import { LargeContainer, MediumContainer, SmallContainer } from "./style";

interface ButtonPropsType {
  size: string;
  $isDisabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ size, $isDisabled = false, children }: ButtonPropsType) => {
  if (size === "small")
    return (
      <SmallContainer $isDisabled={$isDisabled}>{children}</SmallContainer>
    );
  else if (size === "medium")
    return (
      <MediumContainer $isDisabled={$isDisabled}>{children}</MediumContainer>
    );
  else if (size === "large")
    return (
      <LargeContainer $isDisabled={$isDisabled}>{children}</LargeContainer>
    );

  return null;
};

export default Button;
