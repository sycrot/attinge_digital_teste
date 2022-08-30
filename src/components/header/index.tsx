import * as C from './styles'
import LogoPayLabs from '../../assets/img/logo-paylabs.svg'
import ImageBanner from '../../assets/img/img-banner.png'
import WppLogo from '../../assets/img/logo-whatsapp.svg'

const Header = () => (
  <C.Container>
    <C.Nav>
      <C.NavLogo>
        <img src={LogoPayLabs} alt="Logo"/>
      </C.NavLogo>
      <C.NavNumber>
        <img src={WppLogo} alt="" />
        <span>11 99106.1052</span>
      </C.NavNumber>
    </C.Nav>

    <C.Board>
      <C.BoardContentTexts>
        <h2>Seu micromarket descomplicado</h2>
        <span>Comece seu micromarket autônomo com a praticidade e eficiência do sistema PayLabs</span>
        <C.BoardContentButton>Quero conhecer</C.BoardContentButton>
      </C.BoardContentTexts>
      <C.BoardContentImage>
        <img src={ImageBanner} alt="" />
      </C.BoardContentImage>
    </C.Board>

    <C.AdBoard>
      
    </C.AdBoard>
  </C.Container>
)

export default Header