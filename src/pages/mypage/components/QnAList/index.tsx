import * as S from "./style";
import QnAItem from "./QnAItem";
import Button from "@/components/Button";
import { QnAListPropsType } from "@/interface/mypageType";
import Search from "@/components/Search";
import { useNavigate } from "react-router-dom";

const QnAList = ({
  title,
  list,
  search = false,
  button = false,
}: QnAListPropsType) => {
  const navigate = useNavigate();
  const MORE_URL = title === "FAQ" ? `/mypage/qna/faq` : `/mypage/qna/mine`;

  return (
    <S.ListContainer>
      <S.Header>
        <h3>{title}</h3>
        {search && <Search />}
        {button && (
          <Button size="small" onClick={() => navigate(MORE_URL)}>
            더보기
          </Button>
        )}
      </S.Header>

      {list.map((_, index) => (
        <QnAItem key={index} />
      ))}
    </S.ListContainer>
  );
};

export default QnAList;
