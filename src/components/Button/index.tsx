import { ButtonPropsType } from "@/interface/commonType";
import { LargeContainer, MediumContainer, SmallContainer } from "./style";

const Button = ({
  size,
  disabled = false,
  children,
  ...props
}: ButtonPropsType) => {
  if (size === "small")
    return (
      <SmallContainer $isDisabled={disabled} {...props}>
        {children}
      </SmallContainer>
    );
  else if (size === "medium")
    return (
      <MediumContainer $isDisabled={disabled} {...props}>
        {children}
      </MediumContainer>
    );
  else if (size === "large")
    return (
      <LargeContainer $isDisabled={disabled} {...props}>
        {children}
      </LargeContainer>
    );

  return null;
};

export default Button;
