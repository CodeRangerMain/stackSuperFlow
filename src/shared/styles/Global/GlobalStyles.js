import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
    *{
        margin: 0 0 0 0; 
        padding: 0 0 0 0;
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
        outline: none;
        border: 0px;
}   
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
`;
