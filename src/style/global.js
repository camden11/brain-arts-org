import { createGlobalStyle } from "styled-components";
import dinRegular from "../fonts/din_alternate_medium.ttf";
import dinBold from "../fonts/din_alternate_bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DinAlternate;
    src: url(${dinRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: DinAlternate;
    src: url(${dinBold});
    font-weight: 700;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
