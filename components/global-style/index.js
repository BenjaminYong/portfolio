import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: "Courier New", Courier;
    color: white;
    background-color: #121212;
  }
  a {
    color: #BB86FC;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

`;

export default GlobalStyle;
