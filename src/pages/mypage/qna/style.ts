import { FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Question = styled.div`
  ${FlexColumn};
  gap: 1.5rem;

  & > textarea {
    width: 100%;
    height: 21.8rem;
  }

  & > button {
    align-self: flex-end;
  }
`;
