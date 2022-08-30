import * as C from './styles'
import LogoPayLabs from '../../assets/img/logo-paylabs.svg'

import FbIco from '../../assets/img/ico-facebook.png'
import InstaIco from '../../assets/img/ico-instagram.png'
import LinkedInIco from '../../assets/img/ico-linkedin.png'

export const Footer = () => {
  return (
    <C.Container>
      <C.FormContact>
        <h1>Quero conhecer</h1>

        <form>
          <C.InputText placeholder="Nome" type="text"/>
          <C.InputText placeholder="E-mail" type="text"/>
          <C.InputText placeholder="Celular" type="text"/>
          <C.InputTextArea placeholder="Mensagem"/>
        </form>

        <C.ButtonSubmit>Enviar</C.ButtonSubmit>
      </C.FormContact>

      <C.FooterBottom>
        <C.FooterInfo>
          <C.ImageLogo>
            <img src={LogoPayLabs} alt="Logo" />
          </C.ImageLogo>
          <C.Socials>
            <span>Siga-nos</span>
            <C.SocialsIcons>
              <C.SocialIcon href="" target="_blank">
                <img src={FbIco} alt="" />
              </C.SocialIcon>
              <C.SocialIcon href="" target="_blank">
                <img src={InstaIco} alt="" />
              </C.SocialIcon>
              <C.SocialIcon href="" target="_blank">
                <img src={LinkedInIco} alt="" />
              </C.SocialIcon>
            </C.SocialsIcons>
          </C.Socials>
        </C.FooterInfo>

        <C.FooterCopy>
          <span>Copyright © 2022 PayLabs - Todos os direitos reservados.</span>
        </C.FooterCopy>
      </C.FooterBottom>
    </C.Container>
  )
}