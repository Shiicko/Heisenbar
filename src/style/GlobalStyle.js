import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      user-select: none;
      background-color: black;
      height: 100%;
 
} 
html{
    user-select: none;
    scroll-behavior: smooth;
    
  }
`;
