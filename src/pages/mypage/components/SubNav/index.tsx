import { NAV_LIST } from "@/constants/mypage";
import * as S from "./style";

const SubNav = () => {
  return (
    <S.Container>
      {NAV_LIST.map((item) => (
        <S.Item key={item.name}>
          <p className="item-name">{item.name}</p>
          {item.element}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default SubNav;
