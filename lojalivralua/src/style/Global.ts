import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,a,button,input {
        font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
`