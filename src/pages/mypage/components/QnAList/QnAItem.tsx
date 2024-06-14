import { FaLightbulb, FaQuestionCircle } from "react-icons/fa";
import * as S from "./style";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import COLOR from "@/styles/color";

const QnAItem = () => {
  return (
    <S.ItemContainer>
      <S.Section>
        <FaQuestionCircle size="3.2rem" color={COLOR.puple7} />
        <p className="title">환불하려면 어떻게 해야하나요?</p>
        <AiOutlineDown size="2.8rem" />
      </S.Section>

      <S.Section>
        <FaLightbulb size="3.2rem" color="#FFD12E" />
        <p className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          eveniet dignissimos incidunt praesentium delectus quis necessitatibus?
          Corrupti id eius voluptate, necessitatibus laboriosam ullam nulla
          omnis corporis cum, at, eaque maxime.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolores eveniet dignissimos incidunt
          praesentium delectus quis necessitatibus? Corrupti id eius voluptate,
          necessitatibus laboriosam ullam nulla omnis corporis cum, at, eaque
          maxime.
        </p>
        <AiOutlineUp size="2.8rem" />
      </S.Section>
    </S.ItemContainer>
  );
};

export default QnAItem;
