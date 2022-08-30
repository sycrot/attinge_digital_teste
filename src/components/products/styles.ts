import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductItem = styled.div`
  width: 330px;
  display: grid;
  grid-template-columns: 55px 275px;
  margin-top: 30px;
`

export const ProductIcon = styled.div`
  grid-column: 1;
`

export const ProductTexts = styled.div`
  grid-column: 2;
  text-align: start;
  margin-left: 15px;

  h3 {
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 0.63px;
    color: #0096BE;
    line-height: 30px;
    margin-bottom: 10px;
  }

  span {
    line-height: 23px;
    font-size: 19px;
    letter-spacing: 0.47px;
    color: #696969;
  }
`