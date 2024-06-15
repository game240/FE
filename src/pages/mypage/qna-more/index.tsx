import { QnAMorePropsType } from "@/interface/mypageType";
import QnAList from "../components/QnAList";
import Layout from "../components/Layout";

const QnAMore = ({ subject }: QnAMorePropsType) => {
  return (
    <Layout currentTab="QnA">
      <QnAList title={subject} list={[...Array(8)]} search />
    </Layout>
  );
};

export default QnAMore;
