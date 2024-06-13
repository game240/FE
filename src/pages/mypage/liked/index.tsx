import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Layout from "../components/Layout";
import LikedItem from "../components/LikedItem";
import * as S from "./style";
import DropDown from "@/components/DropDown";
import { useToggle } from "@/hooks/useToggle";

const Liked = () => {
  const [isOpen, handleIsOpen] = useToggle(false);

  return (
    <Layout currentTab="찜한 작품">
      <S.Header>
        <h4>전체 10개</h4>
        <S.Sort onClick={handleIsOpen}>
          <h4>최신순</h4>
          {isOpen ? (
            <>
              <AiOutlineUp />
              <DropDown $width="15rem">
                <p>최신순</p>
                <p>높은 가격순</p>
                <p>낮은 가격순</p>
              </DropDown>
            </>
          ) : (
            <AiOutlineDown />
          )}
        </S.Sort>
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
