import React, { useState } from 'react';
import { FaBookAtlas } from "react-icons/fa6"
import { IoIosLogIn } from "react-icons/io"
import { IoIosLogOut } from "react-icons/io"
import { IoIosCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import * as S from './styles'

export const Header: React.FC = () => {

    const [isLogged, setIsLogged ] =  useState(false) 
    const [cart, setCart ] =  useState(false) 

    const toggleLogin = () => {
        setIsLogged(!isLogged);
    };
    const toggleCard = () => {
        setCart(!cart)
    };


    return(    

        <S.Header>
            <S.Grid>   
                <S.Logo >
                    <FaBookAtlas />
                    LivraLua
                </S.Logo>

                <S.SearchFrm>
                    <S.Search placeholder='Pesquisar Produto...' />
                    <S.Submit type='submit' ><FaSearch /></S.Submit>        
                </S.SearchFrm>
                    
                

                <S.Wrrap>
                    <S.Login onClick={toggleLogin}>  
                    {isLogged ? (
                        <>Login <IoIosLogIn /></>
                        ) : (
                        <>Logout <IoIosLogOut /></>
                    )}
                    </S.Login>

                    <S.Card onClick={toggleCard}>Carrinho    
                    <IoIosCart />
                    </S.Card>
                </S.Wrrap>
            </S.Grid> 

        </S.Header>
        
        
    )
} 