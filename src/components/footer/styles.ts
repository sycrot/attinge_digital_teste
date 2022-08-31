import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: 80px;

  @media screen and (min-width: 1280px){
    margin-top: 100px;
  }
`

export const FormContact = styled.div`
  background: #0096BE;
  padding: 85px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #FFFFFF;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  @media screen and (min-width: 1280px){
    form {
      width: 800px;
    }
  }
`

export const InputText = styled.input`
  width: 100%;
  padding: 19px 23px;
  font-size: 18px;
  color: #696969;
  border: none;
  background: #fff;
  border-radius: 10px;
  outline: none;
  margin-top: 10px;
`

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 19px 23px;
  font-size: 18px;
  color: #696969;
  border: none;
  background: #fff;
  border-radius: 10px;
  outline: none;
  margin-top: 10px;
  resize: none;
`

export const ButtonSubmit = styled.button`
  width: 166px;
  height: 70px;
  margin-top: 30px;
  background: #36155C;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.55px;
  cursor: pointer;
`

export const FooterBottom = styled.div`
  background: #36155C;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterInfo = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px){
    width: 1100px;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ImageLogo = styled.div`
  img {
    width: 120px;
  }
`

export const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  span {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.38px;
    color: #FFFFFF;
    margin-right: 18px;
  }
`

export const SocialsIcons = styled.div`
  display: flex;
`

export const SocialIcon = styled.a`
  margin: 0 8px;
`

export const FooterCopy = styled.div`
  width: 100%;
  background: #2A1048;
  padding: 15px 10px;

  span {
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.3px;
    color: #FFFFFF;
  }
`