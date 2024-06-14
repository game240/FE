import COLOR from "@/styles/color";
import * as S from "./style";
import { AiFillHeart } from "react-icons/ai";
import { LikedNumberPropsType } from "@/interface/commonType";

const LikedNumber = ({ number }: LikedNumberPropsType) => {
  return (
    <S.Container>
      <AiFillHeart color={COLOR.red} />
      <p>{number}</p>
    </S.Container>
  );
};

export default LikedNumber;
