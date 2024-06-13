import React from "react";
import * as S from "./style";
// import { useToggle } from "@/hooks/useToggle";
// import { AiOutlineDown } from "react-icons/ai";

interface DropDownType {
  $width: string;
  children: React.ReactNode;
}

const DropDown = ({ $width, children }: DropDownType) => {
  // if (isOpen)
  //   return (
  //     <div>
  //       <h4>최신순</h4>
  //       <AiOutlineDown onClick={handleIsOpen}/>
  //     </div>
  //   );

  return <S.Container $width={$width}>{children}</S.Container>;
};

export default DropDown;
