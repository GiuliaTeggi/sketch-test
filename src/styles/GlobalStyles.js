import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%
  }

  html {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-light-grey: #f9f9f9;
    --max-width-content: 1300px;
  }

  body {
      margin: 0;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
`;

export default GlobalStyles;