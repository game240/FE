import * as S from "./style";
import ItemInfo from "../ItemInfo";

const PurchaseItem = () => {
  return (
    <S.Container>
      <div className="alt-img" />
      <div className="item">
        <ItemInfo />
      </div>
      <button>후기 작성</button>
    </S.Container>
  );
};

export default PurchaseItem;
