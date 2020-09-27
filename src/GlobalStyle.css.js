import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    font-family: "Nunito", sans-serif;
  }
  body {
    font-size: 1rem;
    color: ${({ theme }) => theme.text.color};
    z-index: -10;
    overflow-x: hidden;
  }

`;

export default GlobalStyle;
