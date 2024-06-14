import * as S from "./style";
import ItemInfo from "../ItemInfo";
import Button from "@/components/Button";

interface PurchaseItemPropsType {
  management: boolean;
}

const PurchaseItem = ({ management }: PurchaseItemPropsType) => {
  return (
    <S.Container>
      <div className="alt-img" />
      <div className="item">
        <ItemInfo management={management} />
      </div>
      <Button size="medium">{management ? "수정" : "후기 작성"}</Button>
    </S.Container>
  );
};

export default PurchaseItem;
