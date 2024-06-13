import { FlexAlign } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexAlign};
  gap: 2rem;

  .alt-img {
    width: 19.7rem;
    height: 19.7rem;
    background-color: lightgrey;
    border-radius: 2rem;
  }

  .item {
    flex-grow: 1;
  }
`;
