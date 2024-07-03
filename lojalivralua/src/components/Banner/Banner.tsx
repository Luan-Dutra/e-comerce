import * as S from './Styles'
import Foto from '../../img/banner1.jpg'


export const Banner: React.FC = () => {
    return(
        <S.wrraper>
            <S.BannerIMg src={Foto}></S.BannerIMg>
        </S.wrraper>
    )
}