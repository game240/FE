import character from "@/assets/login/character.svg";
import * as S from "./style";
import { LayoutPropsType } from "@/interface/authType";

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <S.Container>
      <img src={character} alt="character" />
      {children}
    </S.Container>
  );
};

export default Layout;
