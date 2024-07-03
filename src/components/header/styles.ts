import styled from "styled-components";


export const Grid = styled.div`
    max-width: 1440px;
    margin: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

`  

export const Header = styled.header`
    background-color: #973131;
    width: 100wh;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`

export const Logo = styled.h1`
    font-family: "Playwrite ID", cursive;
    font-size: 1.5rem;
    font-weight: 800;
    font-style: normal;
    color: var(--secundaria-cor);
`
export const NavBarDrop = styled.nav`
    
`
export const Login = styled.button`
    background-color: #973131;
    width: 10vw;
    height: 7vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;
    font-size: 1.5rem;
    color: var(--secundaria-cor);

    :hover{
        color: aliceblue;
    }

    svg{
        font-size: 1.5rem;
    }
`
export const Card = styled.button`
    background-color: #973131;
    width: 10vw;
    height: 7vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;
    font-size: 1.5rem;
    color: var(--secundaria-cor);
    :hover{
        color: aliceblue;
    }

    svg{
        font-size: 1.5rem;
    }
`

export const Wrrap = styled.div`
    display: flex;
    align-items: center;
`
export const Search = styled.input`
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    font-size: 1rem;
    border-radius: 4px;
    background-color: aliceblue;
`

export const SearchFrm = styled.form`
    background-color: aliceblue;
    width: 24rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
`
export const Submit = styled.button`
    border: none;
    width: 2rem;
    height: 100%;
    background-color: aliceblue;
    border-radius: 4px;
`