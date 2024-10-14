import styled from 'styled-components'
import { cores } from '../../styles'

export const FilterContainer = styled.section`
  background-color: ${cores.azul};
  border-radius: 10px;

  button {
    background-color: ${cores.amarelo};
    color: ${cores.azul};
    font-size: 20px;
    font-weight: bold;

    &:active,
    &:checked {
      background-color: ${cores.amarelo} !important;
      border-color: ${cores.amarelo} !important;
      color: ${cores.azul} !important;
      outline: none !important;
    }

    &.btn:focus,
    &.btn:active,
    &.btn.show {
      background-color: ${cores.amarelo} !important;
      border-color: ${cores.amarelo} !important;
      color: ${cores.azul} !important;
    }

    &:hover {
      background-color: #f1c40f;
    }
  }
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    text-align: center;
    color: ${cores.amarelo};
  }

  label {
    font-size: 16px;
    font-weight: bold;
    user-select: none;
  }
`
