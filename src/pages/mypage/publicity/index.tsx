import * as S from "./style";
import InputField from "@/components/InputField";
import Layout from "../components/Layout";
import Button from "@/components/Button";
import { usePublicitySchema } from "@/schema/usePublicitySchema";

const Publicity = () => {
  const { register, handleSubmit, isDirty } = usePublicitySchema();
  const handleSubmitForm = () => alert("공연 홍보문 제출에 성공했습니다.");

  return (
    <Layout currentTab="공연 홍보하기">
      <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputField
          title="제목"
          placeholder="제목을 입력해주세요"
          required
          {...register("title")}
        />

        <div className="section-column">
          <S.SectionImg>
            <div className="alt-img" />
            <Button type="button" size="medium">
              포스터 업로드
            </Button>
          </S.SectionImg>

          <S.SectionInfo>
            <InputField
              title="공연 단체"
              placeholder="공연 단체를 입력해주세요"
              required
              {...register("name")}
            />

            <InputField
              title="공연 기간"
              placeholder="공연 기간을 입력해주세요"
              required
              {...register("term")}
            />
          </S.SectionInfo>
        </div>

        <InputField
          title="공연 홍보 링크"
          placeholder="공연 홍보 링크를 입력해주세요"
          required
          {...register("link")}
        />
        <Button type="submit" size="large">
          홍보문 제출
        </Button>
      </S.Form>
    </Layout>
  );
};

export default Publicity;
