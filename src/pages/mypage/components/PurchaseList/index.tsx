import * as S from "./style";
import PurchaseItem from "../PurchaseItem";

interface PurchaseListPropsType {
  management: boolean;
}

const PurchaseList = ({ management }: PurchaseListPropsType) => {
  return (
    <S.Container>
      <S.Header>
        <h4 className="date">2024.06.14</h4>
      </S.Header>
      <S.List>
        <PurchaseItem management={management} />
        <PurchaseItem management={management} />
      </S.List>
    </S.Container>
  );
};

export default PurchaseList;
