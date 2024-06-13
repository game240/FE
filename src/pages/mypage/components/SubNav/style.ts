import { FlexBetweenCenter, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumn};
  gap: 30px;
  width: 34.4rem;
`;

export const Item = styled.div`
  ${FlexBetweenCenter};
  padding: 2.5rem 3rem;
  background-color: white;
  border-radius: 5rem;

  .item-name {
    ${FONT_LARGE};
  }

  & > svg {
    width: 3rem;
    height: 3rem;
  }
`;
