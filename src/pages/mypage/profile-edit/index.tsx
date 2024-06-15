import Button from "@/components/Button";
import Layout from "../components/Layout";
import * as S from "./style";
import InputField from "@/components/InputField";
import { useProfileEditSchema } from "@/hooks/useProfileEditSchema";

const ProfileEdit = () => {
  const { register, handleSubmit, errors, isValid } = useProfileEditSchema();
  const handleSubmitForm = () => alert("회원정보를 수정했습니다.");

  return (
    <Layout currentTab="회원정보 수정">
      <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="section-row">
          <S.SectionImg>
            <div className="alt-img" />
            <Button size="medium">프로필 이미지 수정</Button>
          </S.SectionImg>

          <S.SectionName>
            <InputField
              title="아이디"
              placeholder="아이디를 입력해주세요"
              error={errors.id}
              {...register("id")}
            />

            <InputField
              title="닉네임"
              placeholder="닉네임을 입력해주세요"
              error={errors.nick_name}
              {...register("nick_name")}
            />
          </S.SectionName>
        </div>

        <div className="section-row">
          <InputField
            // type="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            error={errors.password}
            {...register("password")}
          />
          <InputField
            // type="password"
            title="비밀번호 확인"
            placeholder="비밀번호를 입력해주세요"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />
        </div>

        <InputField
          title="이메일"
          placeholder="이메일을 입력해주세요"
          buttonName="이메일 수정하기"
          error={errors.email}
          {...register("email")}
        />

        <InputField
          title="인증번호"
          placeholder="인증번호를 입력해주세요"
          buttonName="인증번호 확인"
        />

        <Button size="large" disabled={!isValid}>
          수정 완료
        </Button>
      </S.Form>
    </Layout>
  );
};

export default ProfileEdit;
