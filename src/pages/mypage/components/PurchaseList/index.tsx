import * as S from "./style";
import PurchaseItem from "./PurchaseItem";
import { PurchaseListPropsType } from "@/interface/mypageType";

const DATA = "심사 중";

const PurchaseList = ({ management }: PurchaseListPropsType) => {
  return (
    <S.ListContainer>
      <S.Header>
        <h4 className="date">2024.06.14</h4>
      </S.Header>
      <S.List>
        <PurchaseItem management={management} data={DATA} />
        <PurchaseItem management={management} />
      </S.List>
    </S.ListContainer>
  );
};

export default PurchaseList;
