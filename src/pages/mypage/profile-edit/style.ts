import { FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Form = styled.form`
  ${FlexColumn};
  gap: 5rem;

  .section-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.8rem;
  }
`;

export const SectionImg = styled.section`
  ${FlexColumn};
  width: 34.4rem;
  gap: 3rem;

  .alt-img {
    width: 34.4rem;
    height: 34.4rem;
    border-radius: 100rem;
    background-color: lightgrey;
  }
`;

export const SectionName = styled.section`
  ${FlexColumn};
  justify-content: space-evenly;
`;
