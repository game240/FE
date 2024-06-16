import { InputFeildPropsType } from "@/interface/commonType";
import Button from "../Button";
import { Input } from "./Input";
import * as S from "./style";
import { forwardRef } from "react";

const InputField = forwardRef<HTMLInputElement, InputFeildPropsType>(
  (
    {
      title,
      buttonName,
      buttonName2,
      handleButtonClick,
      handleButtonClick2,
      error,
      disabled,
      disabled1,
      ...props
    },
    ref
  ) => {
    return (
      <S.Container>
        <S.Title>
          <h4>{title}</h4>
          {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.Title>

        <S.Field>
          <Input ref={ref} {...props} />
          {buttonName && (
            <Button
              type="button"
              size="medium"
              onClick={handleButtonClick}
              disabled={disabled}
            >
              {buttonName}
            </Button>
          )}
          {buttonName2 && (
            <Button
              type="button"
              size="medium"
              onClick={handleButtonClick2}
              disabled={disabled1}
            >
              {buttonName2}
            </Button>
          )}
        </S.Field>
      </S.Container>
    );
  }
);

export default InputField;
