import COLOR from "@/styles/color";
import { FlexAlign, FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const ListContainer = styled.div`
  ${FlexColumn};
  gap: 4.4rem;
  margin-bottom: 6rem;
`;

export const ItemContainer = styled.div`
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
