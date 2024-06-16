import * as S from "./style";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useToggle } from "@/hooks/useToggle";
import { useNavigate } from "react-router-dom";

const FindId = () => {
  const navigate = useNavigate();
  const [success, handleFindId] = useToggle(false);

  if (!success)
    return (
      <S.SectionFind>
        <InputField title="이메일" buttonName="인증 요청" />
        <InputField title="인증 번호" buttonName="인증 확인" />
        <Button size="large" onClick={handleFindId}>
          아이디 찾기
        </Button>
      </S.SectionFind>
    );

  return (
    <S.SectionFind>
      <h4 className="find-id__title">가입하신 아이디는 다음과 같습니다</h4>
      <div className="section-column">
        <p>아이디</p>
        <p>qwer1234</p>
      </div>
      <div className="section-column">
        <p>가입날짜</p>
        <p>2024.03.04</p>
      </div>
      <Button size="large" onClick={() => navigate("/login")}>
        로그인 하러 가기
      </Button>
    </S.SectionFind>
  );
};

export default FindId;
