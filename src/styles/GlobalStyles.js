import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  html, #root {
    height: 100%
  }

  html {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-light-grey: #f9f9f9;
    --color-orange: #f26726;
    --color-border-grey: #e6e6e6;
    --max-width-content: 1300px;
    --min-header-height: 65px;
  }

  body {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: calc(100% - var(--min-header-height));
  }
  
`;

export default GlobalStyles;
