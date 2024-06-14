import COLOR from "@/styles/color";
import { FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const Question = styled.div`
  ${FlexColumn};
  gap: 1.5rem;

  & > textarea {
    width: 100%;
    height: 21.8rem;
    padding: 3rem 4rem;
    border: none;
    border-radius: 0.8rem;
    outline: none;
    box-sizing: border-box;
    resize: none;
    ${FONT_LARGE};

    &:focus {
      border: 1px solid ${COLOR.puple5};
    }
  }

  & > button {
    align-self: flex-end;
  }
`;
