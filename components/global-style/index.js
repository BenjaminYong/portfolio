import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: "Courier New", Courier;
    color: white;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  a {
    position: relative;
    display: inline-block;
    line-height: 55px;
    color: #BB86FC; 
    text-decoration: none;

    @media screen and (max-width: 777px) {
      line-height: 40px;
    }
  
    @media screen and (max-width: 505px) {
      line-height: 30px;
    }
  
    @media screen and (max-width: 410px) {
      line-height: 25px;
    }
  }
    
  a::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    border-bottom: 2px solid #8300FF;
    @media screen and (max-width: 505px) {
      border-bottom: 1px solid #8300FF;
    }
  }
    
  a, a::after {
    transition: all 0.4s linear;
    transition-property: color, width, left;
  }
  
  a:hover {
    color: #8300FF;
  }
  
  a:hover::after {
    left: 0;
    width: 100%;
  }
`;

export default GlobalStyle;
