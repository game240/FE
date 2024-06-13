import { useToggle } from "@/hooks/useToggle";
import * as S from "./styled";
import { useState } from "react";
import { LIKED_DROPDOWN } from "@/constants/mypage";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import DropDown from "@/components/DropDown";

const LikedDropDown = () => {
  const [isOpen, handleIsOpen] = useToggle(false);
  const [sortName, setSortName] = useState<string>(LIKED_DROPDOWN[0]);

  if (!isOpen)
    return (
      <S.Container onClick={handleIsOpen}>
        <h4>{sortName}</h4>
        <AiOutlineDown />
      </S.Container>
    );

  return (
    <S.Container onClick={handleIsOpen}>
      <h4>{sortName}</h4>
      <AiOutlineUp />
      <DropDown $width="15rem">
        {LIKED_DROPDOWN.map((name) => (
          <p key={name} onClick={() => setSortName(name)}>
            {name}
          </p>
        ))}
      </DropDown>
    </S.Container>
  );
};

export default LikedDropDown;
