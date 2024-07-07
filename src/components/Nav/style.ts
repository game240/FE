import COLOR from "@/styles/color";
import { SCALE } from "@/styles/common";
import { FlexBetweenCenter } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexBetweenCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 86%; /* 100%: 아이콘 표시 X */
  background-color: ${COLOR.puple1};
  /* 다른 요소 위 표시 */
  z-index: 1000;

  height: 95px;
  padding: 0 13.5rem;

  .login {
    width: 15.1rem;
    color: ${COLOR.grey6};
    cursor: pointer;

    &:hover {
      color: ${COLOR.grey7};
    }
  }
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
