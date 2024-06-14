import COLOR from "@/styles/color";
import { FlexBetween, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: white;
  border-radius: 0.8rem;
  color: ${COLOR.grey7};

  & svg {
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  ${FlexColumn};
  gap: 1.5rem;
  margin-bottom: 10rem;
`;

export const Question = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem;

  .title {
    flex-grow: 1;
    ${FONT_LARGE};
  }
`;

export const Answer = styled(Question)<{ $isOpen?: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
`;

export const Header = styled.div`
  ${FlexBetween};
`;
