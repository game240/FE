import { FaQuestionCircle } from "react-icons/fa";
import * as S from "./style";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import COLOR from "@/styles/color";

const QnAItem = () => {
  return (
    <S.ItemContainer>
      <FaQuestionCircle size="3.2rem" color={COLOR.puple7} />
      <p className="title">환불하려면 어떻게 해야하나요?</p>
      <AiOutlineDown size="2.8rem" />
      <AiOutlineUp size="2.8rem" />
    </S.ItemContainer>
  );
};

export default QnAItem;
