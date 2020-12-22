// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset};

  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    height: 100%;
    width: 100%;
    padding: 0;
    background: teal;
    font-family: 'JetBrains Mono', monospace;
  }

  #__next {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
