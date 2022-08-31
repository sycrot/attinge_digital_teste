import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 0 16px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 1280px){
    margin-top: 60px;
  }
`

export const BoardContent = styled.div`
  width: 100%;
  padding: 50px 32px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 20px #00000029;

  @media screen and (min-width: 1280px){
    width: 1100px;
    padding: 50px 97px;
  }
`

export const Title = styled.h2`
  font-size: 28px;
  color: #641EB4;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.7px;
  line-height: 30px;
`

export const Subtitle = styled.span`
  color: #696969;
  font-size: 25px;
  letter-spacing: 0.63px;
  line-height: 30px;
`