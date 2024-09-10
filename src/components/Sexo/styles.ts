import styled from 'styled-components'
import { cores } from '../../styles'

export const SexoContent = styled.div`
  input[type='checkbox'] {
    appearance: none;
    background-color: ${cores.cinzaClaro};
    width: 16px;
    height: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    position: relative;

    &:checked::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 2px;
      background-color: ${cores.azul};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:focus {
      outline: none;
    }
  }
`
