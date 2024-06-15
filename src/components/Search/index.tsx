import { IoSearchSharp } from "react-icons/io5";
import * as S from "./style";
import COLOR from "@/styles/color";
import { Input } from "../InputField/Input";

const Search = () => {
  return (
    <S.Container>
      <IoSearchSharp size="3.2rem" color={COLOR.grey6} />
      <Input placeholder="검색어를 입력해주세요" />
    </S.Container>
  );
};

export default Search;
