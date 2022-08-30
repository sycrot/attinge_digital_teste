import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
`

export const PanelContents = styled.div`
  display: grid;

  @media screen and (min-width: 1280px){ 
    width: 1100px;
  }
`

export const Texts = styled.div`
  width: 100%;
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  margin-top: 30px;

  h1 {
    font-size: 40px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 1px;
    color: #641EB4;
  }

  @media screen and (min-width: 1280px){ 
    grid-column: 1;
    grid-row: 1;
    align-self: center;
  }
`

export const TextsList = styled.ul`
  margin-top: 24px;
  list-style-position: inside;
`

export const TextListItem = styled.li`
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.47px;
  color: #696969;
`

export const Image = styled.div`
  grid-column: 1;
  width: 100%;
  grid-row: 1;

  img {
    width: 100%;
  }

  @media screen and (min-width: 1280px){ 
    grid-column: 2;
    grid-row: 1;

    img {
      width: 720px;
    }
  }
`