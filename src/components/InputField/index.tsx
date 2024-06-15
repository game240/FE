import { InputFeildPropsType } from "@/interface/commonType";
import Button from "../Button";
import { Input } from "./Input";
import * as S from "./style";

const InputField = ({ title, buttonName }: InputFeildPropsType) => {
  return (
    <S.Container>
      <h4>{title}</h4>
      <div>
        <Input />
        <Button size="medium">{buttonName}</Button>
      </div>
    </S.Container>
  );
};

export default InputField;
