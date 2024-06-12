import { createGlobalStyle } from "styled-components";
import { FONT_H1, FONT_H2, FONT_H3, FONT_H4, FONT_H5, FONT_H6 } from "./font";
import theme from "./theme";

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
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
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
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }

  h1 { ${FONT_H1} }
  h2 { ${FONT_H2} }
  h3 { ${FONT_H3} }
  h4 { ${FONT_H4} }
  h5 { ${FONT_H5} }
  h6 { ${FONT_H6} }

`;

export default GlobalStyle;
