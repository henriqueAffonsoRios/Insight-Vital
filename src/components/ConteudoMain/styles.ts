import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerPai = styled.div`
  /* background-color: ${cores.azul}; */
  border-radius: 10px;
  color: ${cores.amarelo};

  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  img {
    user-select: none;
  }
`

export const Bg_Container = styled.div`
  background-color: ${cores.azul};
  border-radius: 10px;
  min-height: 340px;
  padding: 10px;
`

export const Content_Container = styled.div`
  background-color: ${cores.cinzaClaro};
  border-radius: 10px;
  min-height: 340px;
`

export const ConteudoInicial = styled.div`
  background-color: ${cores.azul};
  border-radius: 10px;
  min-height: 360px;
`
