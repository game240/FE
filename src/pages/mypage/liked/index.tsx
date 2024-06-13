import LikedItem from "../components/LikedItem";
import SubNav from "../components/SubNav";
import * as S from "./style";

const Liked = () => {
  return (
    <S.Section>
      <SubNav currentTab="찜한 작품" />
      <LikedItem />
    </S.Section>
  );
};

export default Liked;
