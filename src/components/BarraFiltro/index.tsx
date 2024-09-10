import AnoComponente from '../Ano'
import BotaoComponente from '../Botao'
import IdadeComponente from '../Idade'
import SexoComponente from '../Sexo'

import { FilterContainer, FilterList, Item, Main } from './styles'

const BarraFiltro = () => {
  return (
    <Main className="container">
      <FilterContainer>
        <FilterList>
          <Item>
            <SexoComponente />
          </Item>
          <Item>
            <IdadeComponente />
          </Item>
          <Item>
            <AnoComponente />
          </Item>
        </FilterList>
        <BotaoComponente />
      </FilterContainer>
    </Main>
  )
}

export default BarraFiltro
