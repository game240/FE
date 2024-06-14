import Layout from "../components/Layout";
import PurchaseList from "../components/PurchaseList";

const Management = () => {
  return (
    <Layout currentTab="작품 관리">
      <PurchaseList management />
      <PurchaseList management />
    </Layout>
  );
};

export default Management;
