import COLOR from "@/styles/color";
import { FlexBetweenCenter, FlexCenter } from "@/styles/flex";
import { FONT_MEDIUM } from "@/styles/font";
import { FONT_BOLD } from "@/styles/fontWeight";
import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  ${FlexBetweenCenter};
  width: 27.6rem;
`;

export const Box = styled.div<{ $current?: boolean }>`
  ${FlexCenter};
  width: 3.2rem;
  height: 3.2rem;
  border: 0.1rem solid
    ${({ $current }) => ($current ? COLOR.blue6 : COLOR.grey6)};
  border-radius: 0.4rem;
  color: ${({ $current }) => ($current ? COLOR.blue6 : COLOR.grey6)};
  background-color: ${({ $current }) => $current && COLOR.blue2};
  ${FONT_MEDIUM};
  ${FONT_BOLD};
`;
