import Layout from "../components/Layout";
import QnAList from "../components/QnAList";

const QnA = () => {
  return (
    <Layout currentTab="QnA">
      <QnAList title="FAQ" list={[...new Array(4)]} />
      <QnAList title="내가 등록한 질문" list={[...new Array(4)]} />
    </Layout>
  );
};

export default QnA;
