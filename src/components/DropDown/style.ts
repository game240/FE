import COLOR from "@/styles/color";
import { SHADOW } from "@/styles/common";
import { FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div<{ $width: string }>`
  ${FlexColumn};
  position: absolute;
  top: 4rem;
  right: 0;
  z-index: 3;

  width: ${({ $width }) => $width || "auto"};
  padding: 0 3rem;
  background-color: white;
  border: 1px solid ${COLOR.grey4};
  border-radius: 1rem;
  ${SHADOW};

  & > p {
    padding: 2rem 0;
    border-bottom: 1px solid ${COLOR.grey3};
    text-align: center;
    font-size: 2rem;

    &:last-child {
      border: none;
    }
  }
`;
