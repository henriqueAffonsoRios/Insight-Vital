import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerPai = styled.div`
  background-color: ${cores.azul};
  border-radius: 10px;
  color: ${cores.amarelo};
  padding: 38px 80px;
  text-align: center;

  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  img {
    user-select: none;
  }
`
