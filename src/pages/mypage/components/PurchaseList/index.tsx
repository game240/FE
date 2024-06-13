import * as S from "./style";
import PurchaseItem from "../PurchaseItem";

const PurchaseList = () => {
  return (
    <S.Container>
      <S.Header>
        <h4 className="date">2024.06.14</h4>
      </S.Header>
      <S.List>
        <PurchaseItem />
        <PurchaseItem />
      </S.List>
    </S.Container>
  );
};

export default PurchaseList;
