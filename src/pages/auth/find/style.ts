import COLOR from "@/styles/color";
import { FlexColumn, FlexColumnAlign } from "@/styles/flex";
import { FONT_H4 } from "@/styles/font";
import { FONT_BOLD } from "@/styles/fontWeight";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumnAlign};
`;

export const TabNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-bottom: 9.5rem;
  width: 121.2rem;
  height: 12.8rem;
`;

export const TabName = styled.h4<{ $isCurrent: boolean }>`
  display: grid;
  place-items: center;
  width: 100%;
  border-bottom: 0.5rem solid ${({ $isCurrent }) => ($isCurrent ? COLOR.purple5 : COLOR.grey3)};
`;

export const SectionFind = styled.section`
  ${FlexColumn};
  width: 72rem;
  gap: 5.8rem;

  .find-id__title {
    text-align: center;
  }

  .section-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    font-size: 2.8rem;
    ${FONT_H4};
    ${FONT_BOLD};
  }
`;
