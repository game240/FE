import * as S from "./style";
import { PricePropsType } from "@/interface/mypageType";
import { FaFileAlt } from "react-icons/fa";
import { LuVenetianMask } from "react-icons/lu";

const PriceInfo = ({ state, type, management }: PricePropsType) => {
  return (
    <S.Price $soldOut={management && state === "판매 중지"}>
      <div className="info">
        {type === "대본" && <FaFileAlt />}
        {type === "공연권" && <LuVenetianMask />}
        <p>20,000 원</p>
      </div>
      {management && state === "판매 중" && <p className="onSale">판매 중</p>}
      {management && state === "판매 중지" && (
        <p className="soldOut">판매 중지</p>
      )}
    </S.Price>
  );
};

export default PriceInfo;
