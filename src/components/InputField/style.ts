import COLOR from "@/styles/color";
import { FlexAlign, FlexCenter, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumn};
  gap: 1.5rem;
`;

export const Title = styled.div`
  ${FlexAlign};
  gap: 2rem;
`;

export const Field = styled.div`
  ${FlexCenter};
  gap: 1.5rem;
`;

export const ErrorMessage = styled.p`
  height: 2.8rem;
  color: ${COLOR.red};
  ${FONT_LARGE};
`;
