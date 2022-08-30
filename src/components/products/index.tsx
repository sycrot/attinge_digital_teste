import * as C from './styles'
import * as I from '../../assets/icons'

export const Products = () => {
  return (
    <C.Container>
      <C.ProductItem>
        <C.ProductIcon>
          {I.Estoque}
        </C.ProductIcon>
        <C.ProductTexts>
          <h3>Controle de estoque</h3>
          <span>Gerencie o estoque remotamente incluindo e excluindo itens necessários.</span>
        </C.ProductTexts>
      </C.ProductItem>

      <C.ProductItem>
        <C.ProductIcon>
          {I.Vendas}
        </C.ProductIcon>
        <C.ProductTexts>
          <h3>Acompanhamento de vendas</h3>
          <span>Acompanhe em real time o desempenho das vendas do seu micromarket autônomo.</span>
        </C.ProductTexts>
      </C.ProductItem>

      <C.ProductItem>
        <C.ProductIcon>
          {I.Conectividade}
        </C.ProductIcon>
        <C.ProductTexts>
          <h3>Conectividade das maquinas</h3>
          <span>Confira a conectividade das maquinas do seu PDV com a telemetria PayLabs.</span>
        </C.ProductTexts>
      </C.ProductItem>

      <C.ProductItem>
        <C.ProductIcon>
          {I.TwentyForHours}
        </C.ProductIcon>
        <C.ProductTexts>
          <h3>Venda 24h por dia 7 dias por semana</h3>
          <span>Venda em qualquer oportunidade sem a necessidade de presença de vendedores.</span>
        </C.ProductTexts>
      </C.ProductItem>

      <C.ProductItem>
        <C.ProductIcon>
          {I.Usabilidade}
        </C.ProductIcon>
        <C.ProductTexts>
          <h3>Usabilidade descomplicada</h3>
          <span>Sistema e aplicativos pensados e desenvolvidos para facilitar a experiência do usuário.</span>
        </C.ProductTexts>
      </C.ProductItem>

      <C.ProductItem>
        <C.ProductIcon>
          {I.Facilidade}
        </C.ProductIcon>
        <C.ProductTexts>
          <h3>Facilidade de instalação</h3>
          <span>Solução simplificada e fácil de instalação da maquina para o seu PDV autônomo.</span>
        </C.ProductTexts>
      </C.ProductItem>
    </C.Container>
  )
}