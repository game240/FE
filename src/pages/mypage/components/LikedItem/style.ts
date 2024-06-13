import COLOR from "@/styles/color";
import { FlexAlign, FlexBetween, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 27.6rem;
  ${FlexColumn};
  gap: 1.5rem;
`;

export const ImgBox = styled.div`
  width: 27.6rem;
  height: 27.6rem;
  position: relative;

  .alt-img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    background-color: lightgrey;
  }

  & > svg {
    position: absolute;
    bottom: 1.3rem;
    right: 1.3rem;
    width: 5rem;
    height: 5rem;
  }
`;

export const Description = styled.div`
  ${FlexColumn};
  gap: 1rem;
`;

export const Price = styled.div`
  ${FlexBetween};

  .price-box {
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
