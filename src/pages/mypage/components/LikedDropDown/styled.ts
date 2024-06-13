import { FlexAlign } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexAlign};
  gap: 1rem;
  position: relative;
  cursor: pointer;

  & > svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
