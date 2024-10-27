import { useTranslation } from 'react-i18next'

import laco from '../../assets/images/laço.png'

import { ContainerPai } from './styles'

const ConteudoPrincipal = () => {
  const { t } = useTranslation()

  return (
    <ContainerPai className="mx-5">
      <h4>{t('message')}</h4>
      <img src={laco} alt="laço amarelo" />
    </ContainerPai>
  )
}

export default ConteudoPrincipal
