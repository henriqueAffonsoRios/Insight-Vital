import { useTranslation } from 'react-i18next'

import laco from '../../assets/images/laço.png'

import {
  ContainerPai,
  Bg_Container,
  Content_Container,
  ConteudoInicial
} from './styles'

interface isFilteredProps {
  isFiltered: boolean
}

const ConteudoPrincipal: React.FC<isFilteredProps> = ({ isFiltered }) => {
  const { t } = useTranslation()

  return (
    <ContainerPai>
      {isFiltered ? (
        <div className="d-lg-flex justify-content-between">
          <Bg_Container className="col-lg-4 mb-3 mb-lg-0">
            <Content_Container></Content_Container>
          </Bg_Container>
          <Bg_Container className="col-lg-7 mb-3 mb-lg-0">
            <Content_Container></Content_Container>
          </Bg_Container>
        </div>
      ) : (
        <ConteudoInicial className="mx-5 text-center p-5">
          <h4>{t('message')}</h4>
          <img src={laco} alt="laço amarelo" />
        </ConteudoInicial>
      )}
    </ContainerPai>
  )
}

export default ConteudoPrincipal
