import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.azul};
  color: ${cores.amarelo};

  .container {
    > div {
      @media (max-width: ${breakpoints.desktop}) {
        gap: 10px;
      }
    }
  }

  select {
    appearance: none;
    background-color: ${cores.amarelo};
    border: none;
    border-radius: 5px;
    color: ${cores.azul};
    font-weight: bold;
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &.show {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    option {
      text-align: center;
      font-weight: bold;
      border: none;
      outline: none;

      &:focus,
      &:checked,
      &:active {
        background-color: ${cores.amarelo};
        color: ${cores.azul};
      }
    }
  }

  p {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }
`
