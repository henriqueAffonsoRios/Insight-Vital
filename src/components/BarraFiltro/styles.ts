import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const FilterContainer = styled.section`
  background-color: ${cores.azul};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ul {
    gap: 10px;
  }

  button {
    background-color: ${cores.amarelo};
    color: ${cores.azul};
    font-size: 20px;
    font-weight: bold;
    &:hover,
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
  }
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 20px;
  }

  h4 {
    text-align: center;
    color: ${cores.amarelo};
  }

  label {
    font-weight: bold;
    user-select: none;
  }
`
