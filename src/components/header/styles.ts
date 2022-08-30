import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: transparent linear-gradient(154deg, #0096BE 0%, #641EB4 100%) 0% 0%;
  padding-top: 50px;
  font-family: 'Lato', sans-serif;
  position: relative;
  overflow: hidden;
`

export const Nav = styled.nav`
  
`

export const NavLogo = styled.div`
  img {
    width: 164px;
  }
`

export const NavNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  span {
    color: #fff;
    font: normal 16px;
    margin-left: 0.4em;
    font-weight: 900;
  }
  img {
    width: 16px;
    margin-top: 2px;
  }
`

export const Board = styled.div`
  margin-top: 21px;
  padding: 0 15px;
`

export const BoardContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 45px;
    font-weight: 900;
    letter-spacing: 1.13px;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
  }

  span {
    color: #36155C;
    font-size: 25px;
    letter-spacing: 0.63px;
  }
`

export const BoardContentButton = styled.button`
  width: 291px;
  height: 70px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 22px;
  letter-spacing: 0.55px;
  font-weight: 900;
  text-transform: uppercase;

  border: none;
  border-radius: 10px;
  background: #36155C;
  cursor: pointer;
`

export const BoardContentImage = styled.div`

  margin-top: 56px;
  
  img {
    width: 324px;
  }
`

export const AdBoard = styled.div`
  width: 120%;
  height: 60px;
  background: #fafafa;
  border-radius: 50% 50% 0 0;

  margin-top: -15px;
  margin-left: -10%;
`