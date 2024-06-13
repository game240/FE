import COLOR from "@/styles/color";
import { FlexAlign, FlexBetweenCenter } from "@/styles/flex";
import styled from "styled-components";

export const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.6rem, 1fr));
  justify-items: center;
  row-gap: 4rem;
`;

export const Header = styled.div`
  ${FlexBetweenCenter};
  margin-bottom: 5.7rem;
  padding: 0 3rem;
  color: ${COLOR.grey7};
`;

export const Sort = styled.div`
  ${FlexAlign};
  gap: 1rem;
  position: relative;
  cursor: pointer;

  & > svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
