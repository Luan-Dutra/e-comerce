import * as S from './styles'

export  const Header: React.FC = () => {
    return(
        <S.Header>
            <S.Logo>LivraLua</S.Logo>

            <S.Search>Pesquisar Produto...</S.Search>

            <S.Wrrap>
                <S.Login></S.Login>
                <S.Card></S.Card>
            </S.Wrrap>
        </S.Header>
    )
} 