import { FlexBetween } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexBetween};
  height: 95px;
  padding: 0 13.5rem;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const IconBox = styled.div`
  ${FlexBetween};
  gap: 1.5rem;
  padding: 0 1rem;
  & > svg {
    width: 4rem;
    height: 4rem;
  }
`;
