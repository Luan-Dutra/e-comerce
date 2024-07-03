import FotoLancamento from '../../img/lancamento_dez22_post-1.png'
import FotoContato from '../../img/Entre-em-contato-conosco-1.png'
import FotoVendidos from '../../img/maisVendidos.png'
import * as S from './styles'

export const Banners: React.FC = () => {
    return(
        <S.Wrraper>
            <S.wrraperGrid>
                <S.BannerIMg1 src={FotoLancamento}></S.BannerIMg1>
            
                 <S.BannerIMg2 src={FotoContato} ></S.BannerIMg2>
            
                <S.BannerIMg3 src={FotoVendidos} ></S.BannerIMg3>
            </S.wrraperGrid>
        </S.Wrraper>


    )
}



