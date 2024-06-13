import Layout from "../components/Layout";
import PurchaseList from "../components/PurchaseList";

const Purchase = () => {
  return (
    <Layout currentTab="구매한 작품">
      <PurchaseList />
      <PurchaseList />
    </Layout>
  );
};

export default Purchase;
