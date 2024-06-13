import COLOR from "@/styles/color";
import { SCALE } from "@/styles/common";
import { FlexBetweenCenter } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexBetweenCenter};
  height: 95px;
  padding: 0 13.5rem;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;

  & > li {
    color: ${COLOR.grey6};
    cursor: pointer;

    &: hover {
      color: ${COLOR.grey7};
    }
  }
`;

export const IconBox = styled.div`
  ${FlexBetweenCenter};
  gap: 4rem;
  padding: 0 1rem;
  & > svg {
    width: 4rem;
    height: 4rem;
    color: ${COLOR.grey6};
    cursor: pointer;
    transition: transform 0.15s;

    &:hover {
      color: ${COLOR.grey7};
      ${SCALE};
    }
  }
`;
