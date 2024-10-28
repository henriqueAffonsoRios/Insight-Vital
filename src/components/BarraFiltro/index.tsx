import { useTranslation } from 'react-i18next'

import DropdownEstado from '../Estado'
import ModeloGrafico from '../Dropdown/ModeloGrafico'
import SexoComponente from '../Dropdown/Sexo'

import { FilterContainer, Item } from './styles'

const BarraFiltro = () => {
  const { t } = useTranslation()

  return (
    <FilterContainer className="row d-flex align-items-center justify-content-between p-5 m-0">
      <ul className="d-flex m-0 col-lg-9 col-12 p-0 justify-content-center align-items-center flex-md-row flex-column">
        <Item className="col-lg-4 col-md-4 col-12">
          <SexoComponente />
        </Item>
        <Item className="col-lg-4 col-md-4 col-12">
          <DropdownEstado />
        </Item>
        <Item className="col-lg-4 col-md-4 col-12">
          <ModeloGrafico />
        </Item>
      </ul>
      <div className="col-lg-2 col-12 mt-lg-0 mt-3 p-0 text-center">
        <button className="btn w-100">{t('filter')}</button>
      </div>
    </FilterContainer>
  )
}

export default BarraFiltro
