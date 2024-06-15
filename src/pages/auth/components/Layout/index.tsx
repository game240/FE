import character from "@/assets/login/character.svg";
import * as S from "./style";
import { LayoutPropsType } from "@/interface/authType";

const Layout = ({ onSubmit, children }: LayoutPropsType) => {
  return (
    <S.Container>
      <img src={character} alt="character" />
      <S.Form onSubmit={onSubmit}>{children}</S.Form>
    </S.Container>
  );
};

export default Layout;
