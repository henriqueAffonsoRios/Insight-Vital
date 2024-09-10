import styled from 'styled-components'
import { cores } from '../../styles'

export const Botao = styled.button`
  padding: 13px 17px;
  border: none;
  border-radius: 5px;
  background-color: ${cores.amarelo};
  color: ${cores.azul};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    background-color: #f1c40f;
  }
`
