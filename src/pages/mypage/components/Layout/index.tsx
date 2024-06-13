import { LayoutType } from "@/interface/mypageType";
import SubNav from "../SubNav";
import * as S from "./style";

const Layout = ({ currentTab, children }: LayoutType) => {
  return (
    <S.Section>
      <SubNav currentTab={currentTab} />
      <S.Content>{children}</S.Content>
    </S.Section>
  );
};

export default Layout;
