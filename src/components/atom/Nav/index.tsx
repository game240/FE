import { useState } from "react";
import * as S from "./style";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <S.Container>
      <h3>포도상점</h3>
      <S.NavList>
        <li>
          <h5>작품 둘러보기</h5>
        </li>
        <li>
          <h5>지금 공연 중</h5>
        </li>
        <li>
          <h5>작품 등록하기</h5>
        </li>
        <li>
          <h5>희망 대본 신청하기</h5>
        </li>
      </S.NavList>

      {isAuth ? (
        <p>로그인</p>
      ) : (
        <S.IconBox>
          <AiOutlineShoppingCart />
          <AiOutlineUser />
        </S.IconBox>
      )}
    </S.Container>
  );
};

export default Nav;
