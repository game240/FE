import { PaginationPropsType } from "@/interface/commonType";
import * as S from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Pagination = ({ currentNumber }: PaginationPropsType) => {
  return (
    <S.Container>
      <S.Box>
        <IoIosArrowBack />
      </S.Box>

      {[...Array(4)].map((_, index) => (
        <S.Box $current={currentNumber === index + 1}>
          {Math.floor(currentNumber / 4) * 4 + index + 1}
        </S.Box>
      ))}

      <S.Box>
        <IoIosArrowForward />
      </S.Box>
    </S.Container>
  );
};

export default Pagination;
