import COLOR from "@/styles/color";
import { FlexAlign, FlexBetween, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const ItemContainer = styled.div`
  ${FlexAlign};
  gap: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.8rem;
  color: ${COLOR.grey7};

  .title {
    flex-grow: 1;
    ${FONT_LARGE};
  }
`;

export const ListContainer = styled.div`
  ${FlexColumn};
  gap: 1.5rem;
  margin-bottom: 10rem;
`;

export const Header = styled.div`
  ${FlexBetween};
`;
