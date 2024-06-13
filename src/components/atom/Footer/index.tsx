import * as S from "./style";

const Footer = () => {
  return (
    <S.Section>
      <S.Header>
        <h4>포도상점</h4>
        <p>Copyright © 2024 포도상점. Powered by 포도상점</p>
      </S.Header>

      <S.Bottom>
        <S.Representative>
          <p>사업자 번호 : 111-11-111111</p>
          <p>연락처 : 010-0000-0000</p>
          <p>대표 : 서준</p>
        </S.Representative>

        <S.SiteMap>
          <ul>
            <li>전체 메뉴</li>
            <li>
              <a href="#">작품 둘러보기</a>
            </li>
            <li>
              <a href="#">지금 공연 중</a>
            </li>
            <li>
              <a href="#">작품 등록하기</a>
            </li>
            <li>
              <a href="#">희망 대본 신청하기</a>
            </li>
          </ul>
          <ul>
            <li>마이페이지</li>
            <li>
              <a href="#">좋아한 작품</a>
            </li>
            <li>
              <a href="#">구매한 작품</a>
            </li>
            <li>
              <a href="#">등록한 작품</a>
            </li>
            <li>
              <a href="#">장바구니</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
          <ul>
            <li>개인정보처리방침</li>
            <li>
              <a href="#">문의하기</a>
            </li>
          </ul>
          <ul>
            <li>About us</li>
            <li>Front 김동균</li>
            <li>Back 김정윤</li>
            <li>Marketing 정지원</li>
            <li>Design 이인호</li>
          </ul>
          <ul>
            <li>Follow us</li>
          </ul>
        </S.SiteMap>
      </S.Bottom>
    </S.Section>
  );
};

export default Footer;
