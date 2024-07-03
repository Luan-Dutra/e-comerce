import { createGlobalStyle } from "styled-components";

//cor: primaria:973131; secundaria:E0A75E; tercearia:F9D689
//quarta:F9D689

export const GlobalStyle = createGlobalStyle`
    :root{
            --primaria-cor:#973131;
            --secundaria-cor:#E0A75E;
            --tercearia-cor:#F9D689;
            --quarta-cor:#F9D689;
        }

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