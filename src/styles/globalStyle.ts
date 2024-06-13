import { createGlobalStyle } from "styled-components";
import { FONT_H1, FONT_H2, FONT_H3, FONT_H4, FONT_H5 } from "./font";
import COLOR from "./color";
import { FlexColumn } from "./flex";
import FONT_WEIGHT from "./fontWeight";

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

  h1 { ${FONT_H1}; font-weight: ${FONT_WEIGHT.bold}; }
  h2 { ${FONT_H2}; font-weight: ${FONT_WEIGHT.bold}; }
  h3 { ${FONT_H3}; font-weight: ${FONT_WEIGHT.bold}; }
  h4 { ${FONT_H4}; font-weight: ${FONT_WEIGHT.bold}; }
  h5 { ${FONT_H5}; font-weight: ${FONT_WEIGHT.bold}; }

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
