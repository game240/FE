import * as S from "./style";
import ItemInfo from "../components/ItemInfo";
import Layout from "../components/Layout";
import { LuGrape } from "react-icons/lu";

const Review = () => {
  return (
    <Layout currentTab="구매한 작품">
      <S.SectionInfo>
        <div className="alt-img" />
        <ItemInfo management={false} />
      </S.SectionInfo>

      <S.SectionEvaluation>
        <h4>만족도를 평가해 주세요</h4>
        <S.Grape>
          {[...Array(5)].map((_, i) => (
            <LuGrape key={i} strokeWidth={1.2} />
          ))}
        </S.Grape>

        <S.ListSelection>
          <li>다음 작품이 기대돼요</li>
          <li>캐릭터가 매력적이에요</li>
          <li>스토리가 좋아요</li>
        </S.ListSelection>
      </S.SectionEvaluation>

      <S.SectionText>
        <h4>전체적인 후기를 남겨주세요</h4>
        <textarea
          placeholder="중간에 몰입을 방해하는 부분이 있었나요? 캐릭터는 어떠셨나요?&#13;&#10;자유롭게 작성해주세요."
        />
        <ul>
          <li>작성하신 후기는 포도상점 및 포도상점 이용자에게 공개됩니다.</li>
          <li>댓글은 포도상점에서 확인하지 않습니다.</li>
        </ul>
      </S.SectionText>
    </Layout>
  );
};

export default Review;
