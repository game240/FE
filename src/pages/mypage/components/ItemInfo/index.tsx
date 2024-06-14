import * as S from "./style";
import LikedNumber from "@/components/LikedNumber";
import { PurchaseListPropsType } from "@/interface/mypageType";
import PriceInfo from "./PriceInfo";

const ItemInfo = ({ data, management }: PurchaseListPropsType) => {
  return (
    <S.Container>
      <S.Title>
        <h5>Archive</h5>
        {management && <LikedNumber number="12" />}
      </S.Title>

      <h5>서준</h5>
      {data === "심사 중" ? (
        <p className="evaluation">거래 심사중</p>
      ) : (
        <S.PriceBox>
          <PriceInfo type="대본" state="판매 중" management={management} />
          <PriceInfo type="공연권" state="판매 중지" management={management} />
        </S.PriceBox>
      )}
    </S.Container>
  );
};

export default ItemInfo;
