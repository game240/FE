import { NAV_LIST } from "@/constants/mypage";
import * as S from "./style";
import { SubNavPropsType } from "@/interface/mypageType";
import { useNavigate } from "react-router-dom";

const SubNav = ({ currentTab }: SubNavPropsType) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      {NAV_LIST.map((item) => (
        <S.Item
          key={item.name}
          $isCurrent={item.name === currentTab}
          onClick={() => navigate(item.url)}
        >
          <p className="item-name">{item.name}</p>
          {item.element}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default SubNav;
