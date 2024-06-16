import * as S from "./style";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useToggle } from "@/hooks/useToggle";
import { useNavigate } from "react-router-dom";

const FindPw = () => {
  const navigate = useNavigate();
  const [success, handleFindId] = useToggle(false);

  if (!success)
    return (
      <S.SectionFind>
        <InputField title="아이디" />
        <InputField title="이메일" buttonName="인증 요청" />
        <InputField title="인증 번호" buttonName="인증 확인" />
        <Button size="large" onClick={handleFindId}>
          비밀번호 재설정
        </Button>
      </S.SectionFind>
    );
  return (
    <S.SectionFind>
      <InputField title="새로운 비밀번호" />
      <InputField title="비밀번호 확인" />
      <Button size="large">비밀번호 재설정</Button>
    </S.SectionFind>
  );
};

export default FindPw;
