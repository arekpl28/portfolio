import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    // font-family: 'Poppins', sans-serif;
    font-family: "Nunito", sans-serif;

    // font-size: 10px;
  }
  body {
    font-size: 1rem;

    z-index: -10;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;