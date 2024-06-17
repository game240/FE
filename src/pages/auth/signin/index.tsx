import InputField from "@/components/InputField";
import Layout from "../components/Layout";
import { useProfileSchema } from "@/schema/useProfileSchema";
import Button from "@/components/Button";
import { useToggle } from "@/hooks/useToggle";

const SignIn = () => {
  const [isChecked, handleChecked] = useToggle(false);
  const { register, handleSubmit, errors, isDirty } = useProfileSchema();
  const handleSubmitForm = () => alert("회원가입에 성공했습니다.");

  return (
    <Layout onSubmit={handleSubmit(handleSubmitForm)}>
      <h2>회원 가입</h2>
      <InputField
        title="아이디"
        placeholder="아이디를 입력해주세요"
        error={errors.id}
        required
        {...register("id")}
      />
      <InputField
        title="닉네임"
        placeholder="닉네임을 입력해주세요"
        error={errors.nick_name}
        required
        {...register("nick_name")}
      />
      <InputField
        type="password"
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        error={errors.password}
        required
        {...register("password")}
      />
      <InputField
        type="password"
        title="비밀번호 확인"
        placeholder="비밀번호를 입력해주세요"
        error={errors.confirmPassword}
        required
        {...register("confirmPassword")}
      />
      <InputField
        title="이메일"
        placeholder="이메일을 입력해주세요"
        buttonName="인증 요청"
        error={errors.email}
        required
        {...register("email")}
      />

      <InputField
        title="인증번호"
        placeholder="인증번호를 입력해주세요"
        buttonName="인증 확인"
        handleButtonClick={() => {
          // 성공했을 경우
          // handleChecked(true);
        }}
        required
      />

      <Button type="submit" size="medium" disabled={!isDirty && isChecked}>
        회원가입
      </Button>
    </Layout>
  );
};

export default SignIn;
