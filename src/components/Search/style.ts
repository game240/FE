import COLOR from "@/styles/color";
import { FlexAlign } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexAlign};
  padding: 0 1rem;
  border-radius: 0.8rem;
  background-color: white;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 1.5rem 2rem;
  border: none;
  outline: none;
  color: ${COLOR.grey6};
  font-size: 2rem;
  line-height: 2.8rem;

  &::placeholder {
    color: ${COLOR.grey4};
  }
`;
