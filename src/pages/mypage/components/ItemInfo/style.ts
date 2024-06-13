import COLOR from "@/styles/color";
import { FlexAlign, FlexBetween, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumn};
  justify-content: center;
  gap: 1rem;
`;

export const Price = styled.div`
  ${FlexBetween};
  max-width: 30rem;

  .price-box {
    flex-shrink: 0;
    ${FlexAlign};
    gap: 6px;
    ${FONT_LARGE};

    & > svg {
      width: 2.8rem;
      height: 2.8rem;
      color: ${COLOR.blue3};
    }
  }
`;
