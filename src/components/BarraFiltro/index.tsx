import DropdownEstado from '../Estado'
import ModeloGrafico from '../ModeloGrafico'
import SexoComponente from '../Sexo'

import { FilterContainer, Item } from './styles'

const BarraFiltro = () => {
  return (
    <FilterContainer className="d-flex align-center justify-content-between p-4 px-5">
      <ul className="d-flex p-0 m-0">
        <Item className="mx-4">
          <SexoComponente />
        </Item>
        <Item className="mx-4">
          <DropdownEstado />
        </Item>
        <Item className="mx-4">
          <ModeloGrafico />
        </Item>
      </ul>
      <button className="btn my-5 px-5">Filtrar</button>
    </FilterContainer>
  )
}

export default BarraFiltro
