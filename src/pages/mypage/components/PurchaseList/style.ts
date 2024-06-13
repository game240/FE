import COLOR from "@/styles/color";
import { FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumn};
  gap: 4.4rem;
  margin-bottom: 6rem;
`;

export const Header = styled.div`
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid ${COLOR.grey4};

  .date {
    color: ${COLOR.grey7};
  }
`;

export const List = styled.div`
  ${FlexColumn};
  gap: 5rem;
`;
