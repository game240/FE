import { FaLightbulb, FaQuestionCircle } from "react-icons/fa";
import * as S from "./style";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import COLOR from "@/styles/color";
import { useToggle } from "@/hooks/useToggle";

const QnAItem = () => {
  const [isOpen, handleIsOpen] = useToggle(false);

  return (
    <S.ItemContainer>
      <S.Question>
        <FaQuestionCircle size="3.2rem" color={COLOR.puple7} />
        <p className="title">환불하려면 어떻게 해야하나요?</p>
        {isOpen ? (
          <AiOutlineUp size="2.8rem" onClick={handleIsOpen} />
        ) : (
          <AiOutlineDown size="2.8rem" onClick={handleIsOpen} />
        )}
      </S.Question>

      <S.Answer $isOpen={isOpen}>
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
      </S.Answer>
    </S.ItemContainer>
  );
};

export default QnAItem;
