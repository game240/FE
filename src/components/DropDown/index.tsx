import React from "react";
import * as S from "./style";
interface DropDownType {
  $width: string;
  children: React.ReactNode;
}

const DropDown = ({ $width, children }: DropDownType) => {
  return <S.Container $width={$width}>{children}</S.Container>;
};

export default DropDown;
