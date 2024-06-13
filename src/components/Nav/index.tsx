import { useState } from "react";
import * as S from "./style";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <S.Container>
      <h3>
        <a href="/">포도상점</a>
      </h3>
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
          <AiOutlineUser onClick={() => navigate("/mypage/liked")} />
        </S.IconBox>
      )}
    </S.Container>
  );
};

export default Nav;
