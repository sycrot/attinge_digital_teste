import * as C from './styles'
import PainelImg from '../../assets/img/img-painel.png'

export const AdministrativePanel = () => {
  return (
    <C.Container>
      <C.Texts>
        <h1>Painel administrativo</h1>
        <C.TextsList>
          <C.TextListItem>Acompanhe suas vendas</C.TextListItem> 
          <C.TextListItem>Confira a telemetria das maquinas</C.TextListItem>
          <C.TextListItem>Veja as transações realizadas</C.TextListItem>
          <C.TextListItem>Gerencie seu estoque</C.TextListItem>
          <C.TextListItem>Envie notificações aos consumidores</C.TextListItem>
        </C.TextsList>
      </C.Texts>

      <C.Image>
        <img src={PainelImg} alt="" />
      </C.Image>
    </C.Container>
  )
}