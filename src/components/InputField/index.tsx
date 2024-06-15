import { InputFeildPropsType } from "@/interface/commonType";
import Button from "../Button";
import { Input } from "./Input";
import * as S from "./style";
import { forwardRef } from "react";

const InputField = forwardRef<HTMLInputElement, InputFeildPropsType>(
  ({ title, buttonName, error, handleButtonClick, ...props }, ref) => {
    return (
      <S.Container>
        <h4>{title}</h4>
        <S.Field>
          <Input ref={ref} {...props} />
          {buttonName && (
            <Button type="button" size="medium" onClick={handleButtonClick}>
              {buttonName}
            </Button>
          )}
        </S.Field>
        <S.ErrorMessage>{error && error.message}</S.ErrorMessage>
      </S.Container>
    );
  }
);

export default InputField;
