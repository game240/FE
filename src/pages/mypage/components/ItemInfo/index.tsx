import * as S from "./style";
import { FaFileAlt } from "react-icons/fa";
import { LuVenetianMask } from "react-icons/lu";

const ItemInfo = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default ItemInfo;
