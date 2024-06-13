import Layout from "../components/Layout";
import LikedItem from "../components/LikedItem";
import * as S from "./style";

const Liked = () => {
  return (
    <Layout currentTab="찜한 작품">
      <S.ProductList>
        {[...new Array(10)].map((item, index) => (
          <LikedItem key={index} />
        ))}
      </S.ProductList>
    </Layout>
  );
};

export default Liked;
