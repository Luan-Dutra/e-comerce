import styled from "styled-components";


export const link = styled.a`
   
`
export const Wrraper = styled.section`
    background-color: var(--tercearia-cor);
    max-width: 90%;
    margin: 3rem auto;
`


export const BannerIMg1 = styled.img`
    grid-area: maior;
    width: 100%; /* Faz a imagem ocupar 100% da largura da célula */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: cover; 
`
export const BannerIMg2 = styled.img`
    grid-area: modesto;
    width: 100%; /* Faz a imagem ocupar 100% da largura da célula */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: cover; 
`
export const BannerIMg3 = styled.img`
    grid-area: outroModesto;
    width: 100%; /* Faz a imagem ocupar 100% da largura da célula */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: cover; 
`
export const wrraperGrid = styled.div`
    
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
    "maior maior . modesto modesto"
    "maior maior . outroModesto outroModesto";

`