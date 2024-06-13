import * as S from "./style";
import ItemInfo from "../ItemInfo";
import Button from "@/components/Button";

const PurchaseItem = () => {
  return (
    <S.Container>
      <div className="alt-img" />
      <div className="item">
        <ItemInfo />
      </div>
      <Button size="medium">후기 작성</Button>
    </S.Container>
  );
};

export default PurchaseItem;
