import { InputFeildPropsType } from "@/interface/commonType";
import Button from "../Button";
import { Input } from "./Input";
import * as S from "./style";
import { forwardRef } from "react";

const InputField = forwardRef<HTMLInputElement, InputFeildPropsType>(
  ({ title, buttonName, handleButtonClick, error, ...props }, ref) => {
    return (
      <S.Container>
        <S.Title>
          <h4>{title}</h4>
          {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.Title>

        <S.Field>
          <Input ref={ref} {...props} />
          {buttonName && (
            <Button type="button" size="medium" onClick={handleButtonClick}>
              {buttonName}
            </Button>
          )}
        </S.Field>
      </S.Container>
    );
  }
);

export default InputField;
