import * as S from "./style";
import COLOR from "@/styles/color";
import { AiFillHeart } from "react-icons/ai";
import ItemInfo from "../ItemInfo";

const LikedItem = () => {
  return (
    <S.Container>
      <S.ImgBox>
        <div className="alt-img" />
        <AiFillHeart color={COLOR.red} />
      </S.ImgBox>

      <ItemInfo />
    </S.Container>
  );
};

export default LikedItem;
