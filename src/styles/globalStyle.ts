import { createGlobalStyle } from "styled-components";
import {
  FONT_H1,
  FONT_H2,
  FONT_H3,
  FONT_H4,
  FONT_H5,
  FONT_LARGE,
} from "./font";
import COLOR from "./color";
import { FlexColumn } from "./flex";
import { FONT_BOLD } from "./fontWeight";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, details, embed, 
  figure, figcaption, footer, header, hgroup, menu, 
  nav, output, ruby, section, summary, time, mark,
  audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    outline: none;
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  textarea {
    padding: 3rem 4rem;
    border: none;
    border-radius: 0.8rem;
    outline: none;
    box-sizing: border-box;
    resize: none;
    ${FONT_LARGE};

    &:focus {
      border: 1px solid ${COLOR.puple5};
    }
  }

  #root {
    ${FlexColumn};
    min-height: 100vh;
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  html {
    background-color: ${COLOR.puple1};
    font-size: 62.5%; // 10px
  }

  h1 { ${FONT_H1}; ${FONT_BOLD};  }
  h2 { ${FONT_H2}; ${FONT_BOLD}; }
  h3 { ${FONT_H3}; ${FONT_BOLD}; }
  h4 { ${FONT_H4}; ${FONT_BOLD}; }
  h5 { ${FONT_H5}; ${FONT_BOLD}; }

  @media (max-width: 1680px) {
    html {
      font-size: 50%; // 8px;
    }
  }

  @media (max-width: 1300px) {
    html {
      font-size: 37.5%; // 6px;
    }
  }

`;

export default GlobalStyle;
