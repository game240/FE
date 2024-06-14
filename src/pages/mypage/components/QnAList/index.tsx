import * as S from "./style";
import QnAItem from "./QnAItem";
import Button from "@/components/Button";
import { QnAListPropsType } from "@/interface/mypageType";

const QnAList = ({ title, list }: QnAListPropsType) => {
  return (
    <S.ListContainer>
      <S.Header>
        <h3>{title}</h3>
        <Button size="small">더보기</Button>
      </S.Header>
      {list.map((_, index) => (
        <QnAItem key={index} />
      ))}
    </S.ListContainer>
  );
};

export default QnAList;
