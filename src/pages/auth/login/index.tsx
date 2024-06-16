import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useLoginSchema } from "@/schema/useLoginSchema";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useLoginSchema();
  const handleSubmitForm = () => alert("로그인에 성공했습니다.");

  return (
    <Layout onSubmit={handleSubmit(handleSubmitForm)}>
      <h2>로그인</h2>
      <InputField
        title="아이디"
        placeholder="아이디를 입력해주세요"
        error={errors.id}
        {...register("id")}
      />
      <InputField
        type="password"
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        error={errors.password}
        {...register("password")}
      />
      <Button type="submit" size="medium">
        로그인
      </Button>

      <div className="button-column">
        <Button type="button" size="medium" onClick={() => navigate("/signin")}>
          회원가입
        </Button>
        <Button type="button" size="medium" onClick={() => navigate("/find")}>
          아이디 / 비밀번호 찾기
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
