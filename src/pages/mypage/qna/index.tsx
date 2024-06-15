import * as S from "./style";
import Layout from "../components/Layout";
import QnAList from "../components/QnAList";
import Button from "@/components/Button";

const QnA = () => {
  return (
    <Layout currentTab="QnA">
      <QnAList title="FAQ" list={[...new Array(4)]} button />
      <QnAList title="내가 등록한 질문" list={[...new Array(4)]} button />
      <S.Question>
        <h3>질문하기</h3>
        <textarea placeholder="궁금한 점을 적어주세요" />
        <Button size="small">등록하기</Button>
      </S.Question>
    </Layout>
  );
};

export default QnA;
