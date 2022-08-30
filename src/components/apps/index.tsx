import * as C from './styles'
import ImgApp from '../../assets/img/img-app.png'

export const Apps = () => {
  return (
    <C.Container>
      <C.AppsContents>
        <C.AppsImage>
          <img src={ImgApp} alt="" />
        </C.AppsImage>
        <C.AppsTexts>
          <h1>Aplicativos</h1>
          <C.AppItem>
            <h3>Aplicativo consumidor</h3>
            <p>Seus consumidores poderão consultar os produtos disponíveis a distância, desbloquear compras de itens com limite de idade e ter acesso a informações de como comprar.</p>
          </C.AppItem>
          <C.AppItem>
            <h3>Aplicativo lojista</h3>
            <p>Seus lojistas poderão de forma remota gerenciar, conferir as vendas realizadas, ver a telemetria dos PDVs e abastecer de forma simplificada e eficaz a loja.</p>
          </C.AppItem>
        </C.AppsTexts>
      </C.AppsContents>
      
    </C.Container>
  )
}