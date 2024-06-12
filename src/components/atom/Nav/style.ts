import COLOR from "@/styles/color";
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

  & > li {
    cursor: pointer;
  }
`;

export const IconBox = styled.div`
  ${FlexBetween};
  gap: 4rem;
  padding: 0 1rem;
  & > svg {
    width: 4rem;
    height: 4rem;
    color: ${COLOR.grey6};
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
