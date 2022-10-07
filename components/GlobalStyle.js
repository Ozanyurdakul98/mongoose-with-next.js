import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: arial;
    margin: 0;
    padding: 1rem;
  }
`;

export default GlobalStyle;
