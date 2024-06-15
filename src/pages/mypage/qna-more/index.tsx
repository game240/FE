import { QnAMorePropsType } from "@/interface/mypageType";
import QnAList from "../components/QnAList";
import Layout from "../components/Layout";
import Pagination from "@/components/Pagination";

const QnAMore = ({ subject }: QnAMorePropsType) => {
  return (
    <Layout currentTab="QnA">
      <QnAList title={subject} list={[...Array(8)]} search />
      <Pagination currentNumber={3} />
    </Layout>
  );
};

export default QnAMore;
