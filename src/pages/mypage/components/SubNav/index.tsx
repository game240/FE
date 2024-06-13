import { NAV_LIST } from "@/constants/mypage";
import * as S from "./style";
import { SubNavType } from "@/interface/mypageType";

const SubNav = ({ currentTab }: SubNavType) => {
  return (
    <S.Container>
      {NAV_LIST.map((item) => (
        <S.Item key={item.name} $isCurrent={item.name === currentTab}>
          <p className="item-name">{item.name}</p>
          {item.element}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default SubNav;
