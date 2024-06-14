import COLOR from "@/styles/color";
import { SCALE } from "@/styles/common";
import { FlexBetweenCenter, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  ${FlexColumn};
  gap: 30px;
  width: 34.4rem;
`;

export const Item = styled.div<{ $isCurrent: boolean }>`
  ${FlexBetweenCenter};
  padding: 2.5rem 3rem;
  background-color: white;
  border: ${({ $isCurrent }) => $isCurrent && `0.3rem solid ${COLOR.puple4}`};
  border-radius: 5rem;
  cursor: pointer;
  transition: transform 0.15s;

  .item-name {
    ${FONT_LARGE};
  }

  & > svg {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    ${SCALE};
    background-color: ${COLOR.puple2};
  }
`;
