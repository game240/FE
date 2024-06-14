import * as S from "./style";
import ItemInfo from "../ItemInfo";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { PurchaseListPropsType } from "@/interface/mypageType";

const PurchaseItem = ({ management }: PurchaseListPropsType) => {
  const navigate = useNavigate();
  return (
    <S.ItemContainer>
      <div className="alt-img" />
      <div className="item">
        <ItemInfo management={management} />
      </div>
      <Button size="medium" onClick={() => navigate(`/mypage/purchase/1`)}>
        {management ? "수정" : "후기 작성"}
      </Button>
    </S.ItemContainer>
  );
};

export default PurchaseItem;
