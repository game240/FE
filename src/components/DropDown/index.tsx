import * as S from "./style";
import { DropDownType } from "@/interface/commonType";

const DropDown = ({ $width, children }: DropDownType) => {
  return <S.Container $width={$width}>{children}</S.Container>;
};

export default DropDown;
