import COLOR from "@/styles/color";
import { FlexBetweenCenter, FlexColumn, FlexColumnAlign } from "@/styles/flex";
import { FONT_SMALL } from "@/styles/font";
import FONT_WEIGHT from "@/styles/fontWeight";
import styled from "styled-components";

export const Section = styled.section`
  padding: 2.5rem 3rem;
  color: ${COLOR.grey7};
  background-color: white;

  & p {
    ${FONT_SMALL};
  }
`;

export const Header = styled.div`
  max-width: 146rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  & > h4 {
    color: black;
    margin-bottom: 0.5rem;
  }
`;

export const Bottom = styled.div`
  max-width: 146rem;
  margin: 0 auto;
  ${FlexBetweenCenter};
  ${FONT_SMALL};
`;

export const Representative = styled.div`
  flex-shrink: 0;
  ${FlexColumn};
  gap: 1.3rem;
`;

export const SiteMap = styled.div`
  width: 84rem;
  display: flex;

  & > ul {
    flex-grow: 1;
    ${FlexColumnAlign};
    gap: 7px;
    width: 15.7rem;
    border-right: 0.1rem solid ${COLOR.grey3};
  }

  & > ul:last-child {
    border-right: none;
  }

  & > ul > li:first-child {
    color: ${COLOR.grey7};
    font-weight: ${FONT_WEIGHT.bold};
  }
`;
