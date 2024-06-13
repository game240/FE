import Layout from "../components/Layout";
import LikedItem from "../components/LikedItem";
import * as S from "./style";
import LikedDropDown from "../components/LikedDropDown";

const Liked = () => {
  return (
    <Layout currentTab="찜한 작품">
      <S.Header>
        <h4>전체 10개</h4>
        <LikedDropDown />
      </S.Header>

      <S.ProductList>
        {[...new Array(10)].map((item, index) => (
          <LikedItem key={index} />
        ))}
      </S.ProductList>
    </Layout>
  );
};

export default Liked;
