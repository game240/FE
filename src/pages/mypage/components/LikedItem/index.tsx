import * as S from "./style";
import COLOR from "@/styles/color";
import { AiFillHeart } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { LuVenetianMask } from "react-icons/lu";

const LikedItem = () => {
  return (
    <S.Container>
      <S.ImgBox>
        <div className="alt-img" />
        <AiFillHeart color={COLOR.red} />
      </S.ImgBox>

      <S.Description>
        <h5>Archive</h5>
        <h5>서준</h5>
        <S.Price>
          <div className="price-box">
            <FaFileAlt />
            <p>20,000 원</p>
          </div>
          <div className="price-box">
            <LuVenetianMask />
            <p>30,000 원</p>
          </div>
        </S.Price>
      </S.Description>
    </S.Container>
  );
};

export default LikedItem;
