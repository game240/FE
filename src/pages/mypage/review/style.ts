import COLOR from "@/styles/color";
import { FlexCenter, FlexColumn } from "@/styles/flex";
import { FONT_SMALL } from "@/styles/font";
import styled from "styled-components";

export const SectionInfo = styled.section`
  ${FlexCenter};
  gap: 13rem;
  margin-bottom: 10rem;

  .alt-img {
    width: 19.7rem;
    height: 19.7rem;
    border-radius: 2rem;
    background-color: lightgrey;
  }
`;

export const SectionEvaluation = styled.section`
  ${FlexColumn};
  gap: 3rem;
  margin-bottom: 10rem;
`;

export const Grape = styled.div`
  display: flex;
  gap: 3rem;

  & > svg {
    width: 5rem;
    height: 5rem;
    color: ${COLOR.grey4};
  }
`;

export const ListSelection = styled.ul`
  display: flex;
  gap: 4rem;
  color: ${COLOR.grey5};
  font-size: 20px;
  line-height: 28px;
`;

export const SectionText = styled.section`
  ${FlexColumn};
  gap: 3rem;
  margin-bottom: 10rem;

  & > textarea {
    height: 21.8rem;
  }

  & > ul {
    ${FONT_SMALL};
  }
`;
