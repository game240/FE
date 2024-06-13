import { FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  width: 27.6rem;
  ${FlexColumn};
  gap: 1.5rem;
`;

export const ImgBox = styled.div`
  width: 27.6rem;
  height: 27.6rem;
  position: relative;

  .alt-img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    background-color: lightgrey;
  }

  & > svg {
    position: absolute;
    bottom: 1.3rem;
    right: 1.3rem;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
  }
`;
