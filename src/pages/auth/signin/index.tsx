import InputField from "@/components/InputField";
import Layout from "../components/Layout";
import { useProfileSchema } from "@/schema/useProfileSchema";
import Button from "@/components/Button";
import { useState } from "react";

const SignIn = () => {
  const [isEmailRequestSent, setIsEmailRequestSent] = useState(false); // 이메일 인증 요청 전송 여부
  const [isEmailChecked, setIsEmailChecked] = useState(false); // 이메일 인증 확인
  const [isFormValid, setIsFormValid] = useState(false); // 모든 입력과 인증 상태가 정상적인지

  const { register, handleSubmit, trigger, errors, isDirty } = useProfileSchema();
  const handleSubmitForm = () => alert("회원가입에 성공했습니다.");

  // 입력창에서 벗어나면(blur) 유효성 검사 비동기 수행
  const handleBlur = async (field: string) => {
    await trigger(field);
    checkFormValidity();
  };

  // 회원가입 버튼 활성화에 사용
  // 모든 입력창에 에러가 없고, 이메일 인증이 완료되었는지 확인
  const checkFormValidity = () => {
    if (Object.keys(errors).length === 0 && isDirty && isEmailChecked) {
      setIsFormValid(true);
      alert("이메일 인증에 성공하였습니다.");
    } else {
      setIsFormValid(false);
      alert("이메일 인증에 실패하였습니다.");
    }
  };

  return (
    <Layout onSubmit={handleSubmit(handleSubmitForm)}>
      <h2>회원 가입</h2>
      <InputField
        title="아이디"
        placeholder="아이디를 입력해주세요"
        error={errors.id}
        required
        // onBlur 발생 시 handleBlur 호출, register 함수 연결
        {...register("id", { onBlur: () => handleBlur("id") })}
      />
      <InputField
        title="닉네임"
        placeholder="닉네임을 입력해주세요"
        error={errors.nick_name}
        required
        {...register("nick_name", { onBlur: () => handleBlur("nick_name") })}
      />
      <InputField
        type="password"
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        error={errors.password}
        required
        {...register("password", { onBlur: () => handleBlur("password") })}
      />
      <InputField
        type="password"
        title="비밀번호 확인"
        placeholder="비밀번호를 입력해주세요"
        error={errors.confirmPassword}
        required
        {...register("confirmPassword", { onBlur: () => handleBlur("confirmPassword") })}
      />
      <InputField
        title="이메일"
        placeholder="이메일을 입력해주세요"
        buttonName="인증 요청"
        error={errors.email}
        required
        {...register("email", { onBlur: () => handleBlur("email") })}
        handleButtonClick={() => {
          setIsEmailRequestSent(true);
        }}
      />

      <InputField
        title="인증번호"
        placeholder="인증번호를 입력해주세요"
        buttonName="인증 확인"
        handleButtonClick={() => {
          // 이메일 인증이 성공했을 경우
          setIsEmailChecked(true); // 이메일 인증 상태를 true로 설정
          checkFormValidity(); // 이메일 인증 상태가 변경된 후 유효성 검사 실행
        }}
        required
        disabled={!isEmailRequestSent} // 인증 요청이 성공적으로 전달되어야만 활성화
      />

      <Button type="submit" size="medium" disabled={!isFormValid}>
        회원가입
      </Button>
    </Layout>
  );
};

export default SignIn;
