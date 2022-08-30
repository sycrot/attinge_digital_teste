import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
`

export const AppsContents = styled.div`
  width: 100%;
  background: #641EB4;
  border-radius: 10px;
  padding: 0 10px 60px 10px;

  @media screen and (min-width: 1280px){
    width: 1100px;
    display: flex;
    padding: 0 70px 50px 70px;
  }
`

export const AppsImage = styled.div`
  position: relative;

  img {
    margin-top: -30px;
    width: 100%;
  }

  @media screen and (min-width: 1280px){
    img {
      width: 476px;
    }
    
  }
`

export const AppsTexts = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 28px;
  text-align: start;

  h1 {
    color: #BE84FF;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 1280px){
    margin-left: 20px;
  }
`

export const AppItem = styled.div`
  margin-top: 20px;

  h3 {
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 0.63px;
    margin-bottom: 10px;
  }

  p {
    color: #BE84FF;
    font-size: 19px;
    letter-spacing: 0.47px;
    line-height: 23px;
  }
`