import COLOR from "@/styles/color";
import styled from "styled-components";

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
