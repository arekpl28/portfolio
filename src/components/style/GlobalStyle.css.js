import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
  }
  body {
    z-index: -10;
  }
`;

export default GlobalStyle;
