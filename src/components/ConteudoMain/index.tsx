import laco from '../../assets/images/laço.png'

import { ContainerPai } from './styles'

const ConteudoPrincipal = () => {
  const texto =
    'Você não está sozinho. Cada dado aqui conta uma história, e juntos podemos fazer a diferença.'

  return (
    <ContainerPai>
      <h4>{texto}</h4>
      <img src={laco} alt="laço amarelo" />
    </ContainerPai>
  )
}

export default ConteudoPrincipal
