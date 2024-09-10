import styled from 'styled-components'
import { cores } from '../../styles'

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  width: 100%;
  font-weight: bold;

  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: ${cores.azul};
    font-weight: bold;
  }

  span {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const DecreaseBtn = styled.button`
  position: absolute;
  left: 0;
`

export const IncreaseBtn = styled.button`
  position: absolute;
  right: 0;
`
