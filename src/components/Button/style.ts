import styled from "styled-components";
import COLOR from "@/styles/color";
import { FONT_LARGE } from "@/styles/font";
import { FONT_BOLD } from "@/styles/fontWeight";

export const Container = styled.button<{ $isDisabled: boolean }>`
  border-radius: 5rem;
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? COLOR.grey4 : COLOR.puple4};
  color: ${({ $isDisabled }) => ($isDisabled ? COLOR.grey1 : COLOR.grey2)};
  ${FONT_BOLD}
`;

export const SmallContainer = styled(Container)`
  ${FONT_LARGE};
  padding: 0.8rem 2.3rem;
`;

export const MediumContainer = styled(Container)`
  font-size: 2rem;
  line-height: 2.8rem;
  padding: 1rem 3rem;
`;

export const LargeContainer = styled(Container)`
  font-size: 2.4rem;
  line-height: 3.2rem;
  padding: 1.5rem 4rem;
`;
