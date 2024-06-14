import COLOR from "@/styles/color";
import { FlexAlign } from "@/styles/flex";
import { FONT_MEDIUM } from "@/styles/font";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexAlign};
  gap: 0.5rem;
  color: ${COLOR.grey7};
  ${FONT_MEDIUM};

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
