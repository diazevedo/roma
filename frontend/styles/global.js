// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset};

  body {
    padding: 0;
    background: teal;
    font-family: 'JetBrains Mono', monospace;
  }

`;

export default GlobalStyle;
