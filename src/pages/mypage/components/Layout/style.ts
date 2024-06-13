import { FlexBetween, FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Section = styled.div`
  ${FlexBetween};
  gap: 15rem;
`;

export const Content = styled.div`
  ${FlexColumn};
  flex-grow: 1;
`;
