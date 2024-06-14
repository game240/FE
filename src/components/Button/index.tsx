import { ButtonPropsType } from "@/interface/commonType";
import { LargeContainer, MediumContainer, SmallContainer } from "./style";

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
