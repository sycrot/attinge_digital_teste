import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0 15px;
`

export const AppsContents = styled.div`
  width: 100%;
  background: #641EB4;
  border-radius: 10px;
  padding: 0 10px 60px 10px;
`

export const AppsImage = styled.div`
  position: relative;

  img {
    margin-top: -30px;
    width: 100%;
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